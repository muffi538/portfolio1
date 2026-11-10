"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { AwardImage } from "@/lib/types";

/**
 * A grid of photographs, each opening full size in a lightbox.
 *
 * Built on the native `<dialog>` element rather than a hand-rolled overlay:
 * `showModal()` brings focus trapping, inertness for the page behind, and
 * Escape-to-close with the browser, so none of that is reimplemented here.
 *
 * The grid crops every frame to a common 4:3 with its own focus point, which
 * is what keeps the collection aligned; the lightbox then shows the whole
 * uncropped photograph, so nothing is lost to the crop.
 */
export function ImageLightbox({ images }: { images: AwardImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const image = images[current];

  function open(index: number) {
    setCurrent(index);
    dialogRef.current?.showModal();
  }

  function step(direction: 1 | -1) {
    setCurrent((i) => (i + direction + images.length) % images.length);
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-3">
        {images.map((item, i) => (
          <li key={item.caption}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`View larger: ${item.caption}`}
              className="group block w-full text-left"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-ink bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                  style={{ objectPosition: item.focus }}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 30vw"
                />
              </div>
              <p className="mt-3 flex gap-2 text-sm leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-ink group-focus-visible:text-ink">
                {/* The rule grows to meet the caption, rather than the caption
                    moving — the grid stays on its baseline either way. */}
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-4 shrink-0 origin-left bg-border transition-all duration-300 ease-out group-hover:w-7 group-hover:bg-accent group-focus-visible:w-7 group-focus-visible:bg-accent"
                />
                {item.caption}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Award photographs"
        onClose={() => setCurrent((i) => i)}
        /* A click that lands on the dialog itself is a click on the backdrop:
           the photograph and the controls are all in the figure inside it. */
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        /* `backdrop:bg-black/85` rather than the ink token: `::backdrop` does
           not reliably inherit custom properties across browsers. */
        className="dialog-pop max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85 open:fixed open:inset-0 open:flex open:h-full open:w-full open:items-center open:justify-center"
      >
        <figure
          className="relative flex max-h-[90vh] w-[92vw] max-w-4xl flex-col items-center gap-5"
          /* Clicks inside the figure must not reach the backdrop handler. */
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-h-[70vh] w-auto rounded-lg object-contain"
            sizes="92vw"
          />

          {/* Centred under the photograph, so the controls stay with it
              whether the frame is a portrait or a landscape. */}
          <figcaption className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-paper">
            <p className="w-full text-sm sm:w-auto">{image.caption}</p>

            <div className="flex items-center gap-2">
              <span className="mr-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/60">
                {current + 1} / {images.length}
              </span>
              {(
                [
                  ["Previous photograph", ArrowLeft, -1 as const],
                  ["Next photograph", ArrowRight, 1 as const],
                ] as const
              ).map(([label, Icon, direction]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => step(direction)}
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </button>
              ))}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close"
                className="ml-1 inline-flex size-10 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink focus-visible:bg-paper focus-visible:text-ink"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            </div>
          </figcaption>
        </figure>
      </dialog>
    </>
  );
}
