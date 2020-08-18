import React from "react";
import { Box } from "./theme";
import Apple from "../../assets/icons/Apple";
import Google from "../../assets/icons/Google";
import Fb from "../../assets/icons/Fb";
import { useTheme } from "@shopify/restyle";
export default (props) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l;
  const SocialIcon = ({ children }) => (
    <Box
      backgroundColor="white"
      marginHorizontal="s"
      width={SIZE}
      height={SIZE}
      justifyContent="center"
      alignItems="center"
      borderRadius="l"
      p="m"
    >
      {children}
    </Box>
  );
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Fb />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};
