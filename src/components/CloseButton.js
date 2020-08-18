import React from "react";
import { Box, Text } from "./theme";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
export default ({ onPress }) => {
  return (
    <RectButton onPress={onPress}>
      <Box
        style={{ width: 60, height: 60, borderRadius: 30 }}
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        backgroundColor="white"
      >
        <Text color="secondary">
          <Feather name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};
