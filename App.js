import React from "react";
import Auth from "./src/nav/AuthStack";
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/components/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
const fonts = {
  bold: require("./assets/fonts/Ubuntu-Bold.ttf"),
  semi: require("./assets/fonts/Ubuntu-Medium.ttf"),
  regular: require("./assets/fonts/Ubuntu-Regular.ttf"),
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <Auth />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
