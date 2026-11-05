import type { Asset } from "@/lib/types";

export const sport = {
  summary:
    "Passionate football player with competitive experience across school, collegiate and club level. Currently Sports Secretary at Mesa School of Business, leading sports initiatives and student athletic engagement.",
  club:
    "Previously played for the AS Roma youth setup in Dubai, representing an Italian football club at professional club level and gaining exposure to competitive international football environments.",
  wins: [
    "Winner — IIT Bombay Tournament",
    "Winner — GEMS Tournament",
    "Winner — FLAMES Tournament",
  ],
  logo: {
    src: "/images/logo-as-roma-dubai.jpg",
    alt: "AS Roma Academy Dubai logo",
    width: 225,
    height: 225,
  } satisfies Asset,
  images: [
    {
      src: "/images/football-mitwpu-trophy.jpg",
      alt: "Mufaddal holding a trophy and certificate in an MIT-WPU football kit",
      width: 583,
      height: 557,
    },
    {
      src: "/images/football-trophies.jpg",
      alt: "A line of football trophies and medals on a pitch",
      width: 950,
      height: 491,
    },
  ] satisfies Asset[],
};
