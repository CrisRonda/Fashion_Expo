import React from "react";
import { SocialLogin, Button, Text, Box } from "../../../components";
import { TouchableWithoutFeedback } from "react-native";
export default ({ onPress, title, action }) => {
  return (
    <Box mt="m">
      <SocialLogin />
      <Box alignItems="center" marginVertical="m">
        <TouchableWithoutFeedback onPress={onPress}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              {title}
            </Text>
            <Text variant="button" color="primary" ml="s">
              {action}
            </Text>
          </Box>
        </TouchableWithoutFeedback>
      </Box>
    </Box>
  );
};
