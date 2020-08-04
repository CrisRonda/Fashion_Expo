import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { width, SLIDE_HEIGHT } from "../../../../assets/Dimensions";

export default ({ title, left, picture }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: left ? -width / 2 + 50 : width / 2 - 50 },
    { rotate: left ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: width },
  title: {
    lineHeight: 80,
    fontSize: 60,
    fontFamily: "bold",
    textAlign: "center",
    color: "white",
  },
  titleContainer: {
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  underlay: {
    position: "absolute",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    zIndex: -999,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
