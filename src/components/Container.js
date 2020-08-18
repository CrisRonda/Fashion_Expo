import React from "react";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { Box } from "./theme";
import { width, screenHeight } from "../../assets/Dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
const ratio = 750 / 1525;
const height = width * ratio;
export const assets = [
  require("../../assets/img/10.jpg"),
  require("../../assets/img/11.jpg"),
  require("../../assets/img/12.jpg"),
];
export default ({ children, footer, pattern = 0 }) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <ScrollView scrollEnabled={false}>
      <View style={{ flex: 1, height: screenHeight }}>
        <Box flex={1} backgroundColor="secondary">
          <Box backgroundColor="white">
            <Box borderBottomLeftRadius="xl" overflow="hidden">
              <Image
                source={asset}
                style={{
                  width,
                  height,
                  borderBottomLeftRadius: theme.borderRadii.xl,
                }}
              />
            </Box>
          </Box>
          <Box
            flex={1}
            overflow="hidden"
            backgroundColor="secondary"
            zIndex={9999}
          >
            <Image
              source={asset}
              style={{
                ...StyleSheet.absoluteFillObject,
                width,
                height,
                top: -height * 0.67,
              }}
            />
            <Box
              flex={1}
              borderRadius="xl"
              borderTopLeftRadius={0}
              backgroundColor="white"
              p="l"
            >
              {children}
            </Box>
          </Box>
          <Box backgroundColor="secondary" paddingVertical="m">
            {footer}
            <Box height={insets.bottom} />
          </Box>
        </Box>
      </View>
    </ScrollView>
  );
};
