import localFont from "next/font/local";

/* SEE: https://nextjs.org/docs/basic-features/font-optimization */

// const pragmata = localFont({
//   src: "../node_modules/gcmp-design-system/fonts/ppr_0829.woff2",
//   variable: "--font-ppr",
// });

const sans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "./fonts/neue-haas-unica-pro-regular.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-unica-pro-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-unica-pro-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-unica-pro-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-unica-pro-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/neue-haas-unica-pro-bold.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

const mono = localFont({
  variable: "--font-mono",
  display: "swap",
  src: [
    {
      path: "./fonts/SohneMono-Buch.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export { mono, sans };
