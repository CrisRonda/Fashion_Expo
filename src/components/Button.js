import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, StyleSheet } from "react-native";
import theme from "./theme";
export default ({ label, variant = "default", onPress }) => {
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.title;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "semi",
  },
});
