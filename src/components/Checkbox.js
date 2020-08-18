import React from "react";
import { Box, Text } from "./theme";
import { StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
export default ({ label, checked, onChange }) => {
  return (
    <RectButton style={{ justifyContent: "center" }} onPress={() => onChange()}>
      <Box flexDirection="row" alignItems="center">
        <Box
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={StyleSheet.hairlineWidth}
          backgroundColor={checked ? "primary" : "white"}
          height={20}
          width={20}
        >
          {checked && <Icon name="check" color="white" />}
        </Box>
        <Text variant="button" ml="s">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};
