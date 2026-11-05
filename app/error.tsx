"use client";

import { useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with a real reporting service when one is set up.
    console.error(error);
  }, [error]);

  return (
    <Section
      id="error"
      headingLevel="h1"
      title="Something went wrong"
      description="An unexpected error occurred. Try again, or return to the home page."
    >
      <Button onClick={reset}>Try again</Button>
    </Section>
  );
}
