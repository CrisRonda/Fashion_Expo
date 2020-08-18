import { createTheme, createText, createBox } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2cb9b0",
    primaryLight: "e7f9f7",
    secondary: "#0c0d34",
    title: "#0c0d34",
    text: "rgba(12,13,52,0.5)",
    white: "#fff",
    grey: "rgba(12,13,52,0.05)",
    darkGrey: "#8a8d90",
    danger: "#ff0058",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      lineHeight: 80,
      fontSize: 60,
      fontFamily: "bold",
      textAlign: "center",
      color: "white",
    },
    title1: {
      fontSize: 28,
      fontFamily: "bold",
      color: "title",
    },
    title2: {
      lineHeight: 30,
      fontSize: 24,
      fontFamily: "semi",
      color: "title",
    },
    text: {
      lineHeight: 30,
      fontSize: 16,
      fontFamily: "regular",
      color: "text",
    },
    button: {
      fontSize: 18,
      fontFamily: "regular",
      color: "text",
    },
  },
});

// export type Theme = typeof theme;
export const Text = createText();
export const Box = createBox();
export default theme;
