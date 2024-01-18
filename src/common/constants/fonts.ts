import localFont from "@next/font/local";

export const FONTS = localFont({
  src: [
    {
      path: "../../assets/fonts/Roboto-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Roboto-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Roboto-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export default FONTS;
