import React from "react";
import { Box, Text, Button } from "../../components/";
import { Image } from "react-native";
import { width } from "../../../assets/Dimensions";
import theme from "../../components/theme";
import { useNavigation } from "@react-navigation/native";

const picture = {
  src: require("../../../assets/img/1.png"),
  width: 3383,
  height: 5074,
};
export default (props) => {
  const { navigate } = useNavigation();
  return (
    <Box flex={1}>
      <Box
        flex={1}
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
        overflow="hidden"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} backgroundColor="grey">
        <Box position="absolute" top={0} left={0} bottom={0} right={0} />
        <Box
          borderTopLeftRadius="xl"
          backgroundColor="white"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title1">Vamos a empezar</Text>
          <Text variant="text" textAlign="center">
            Inicia sesión o registrate para una experiencia única
          </Text>
          <Button
            variant="primary"
            label="Inciar sesión"
            onPress={() => navigate("Login")}
          />
          <Button
            label="Únete, es gratis!"
            onPress={() => navigate("SignUp")}
          />
          <Button
            variant="transparent"
            label="Olvide mi contraseña"
            onPress={() => navigate("ForgotPassword")}
          />
        </Box>
      </Box>
    </Box>
  );
};
