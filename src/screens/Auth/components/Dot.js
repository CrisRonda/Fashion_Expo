import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";
export default ({ index, currentIndex, x }) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.2, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.5, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={[styles.container, { opacity }, { transform: [{ scale }] }]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2CB9b0",
    width: 8,
    height: 8,
    margin: 4,
    borderRadius: 4,
  },
});
