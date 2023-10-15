import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { max: "820px" },
      xs: { max: "600px" },
      xxs: { max: "470px" },
    },
    extend: {
      colors: {
        transparent: "transparent",
        bg: "#fff",
        bgAlt: "#fdf2e9",
        primary: "#1e1e1e",
        secondary: "#fff",
        info: "#04aa6d",
        infoHover: "#16c58c",
      },
      margin: {
        vh6: "6vh",
        vh25: "25vh",
      },
      minWidth: {
        vw40: "40vw",
      },
      maxWidth: {
        vw85: "85vw",
      },
      gridTemplateColumns: {
        header: "1fr auto 1fr",
      },
      gridTemplateRows: {
        footer: "1fr auto",
      },
    },
  },
  plugins: [],
};
export default config;
