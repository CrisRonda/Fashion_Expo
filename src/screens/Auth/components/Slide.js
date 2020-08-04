import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { width, SLIDE_HEIGHT } from "../../../../assets/Dimensions";
import { Text } from "../../../components";

export default ({ title, left }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: left ? -width / 2 + 50 : width / 2 - 50 },
    { rotate: left ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: width },

  titleContainer: {
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
});
