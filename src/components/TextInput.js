import React, { forwardRef } from "react";
import { Box } from "./theme";
import { Feather as Icon } from "@expo/vector-icons";
import { TextInput, StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
const TextInputRN = forwardRef(
  ({ placeholder, icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const validColor = !touched ? "text" : !error ? "primary" : "danger";
    const color = theme.colors[validColor];

    return (
      <Box
        flexDirection="row"
        height={44}
        borderRadius="s"
        borderColor={validColor}
        borderWidth={StyleSheet.hairlineWidth}
        alignItems="center"
        p="s"
        mb="s"
      >
        <Box p="s">
          <Icon name={icon} size={16} color={color} />
        </Box>
        <Box flex={1}>
          <TextInput
            {...{ ref }}
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            placeholder={placeholder}
            {...props}
          />
        </Box>
        {touched && (
          <Box
            width={18}
            height={18}
            justifyContent="center"
            alignItems="center"
            borderRadius="m"
            backgroundColor={error ? "danger" : "primary"}
            style={{ borderRadius: 32 }}
          >
            {!error ? (
              <Icon name="check" color="white" />
            ) : (
              <Icon name="x" color="white" />
            )}
          </Box>
        )}
      </Box>
    );
  }
);
export default TextInputRN;
