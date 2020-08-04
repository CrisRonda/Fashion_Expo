import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { View, Text, StyleSheet } from "react-native";
export default ({ label, variant = "default", onPress }) => {
  const backgroundColor =
    variant === "primary" ? "#2cb9b0" : "rgba(12,13,52,0.05)";
  const color = variant === "primary" ? "white" : "#0c0d34";
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
