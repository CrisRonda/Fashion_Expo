import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../../components/";
export default ({ subtitle, description, x, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        {...{ onPress }}
        label={last ? "¡Empecemos!" : "Siguiente"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  subtitle: {
    fontFamily: "regular",
    fontSize: 24,
    marginBottom: 12,
    color: "#0c0d34",
    textAlign: "center",
  },
  description: {
    fontFamily: "regular",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
    color: "#0c0d34",
    textAlign: "center",
  },
});
