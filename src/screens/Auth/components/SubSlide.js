import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "../../../components/";
export default ({ subtitle, description, x, last, onPress }) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text textAlign="center" marginBottom="m" variant="text">
        {description}
      </Text>
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
});
