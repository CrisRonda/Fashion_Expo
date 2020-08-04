import React from "react";
import { Box, Text, Button } from "../../components/";
import { Image } from "react-native";
import { width } from "../../../assets/Dimensions";
import theme from "../../components/theme";

const picture = {
  src: require("../../../assets/img/1.png"),
  width: 3383,
  height: 5074,
};
export default (props) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="primary"
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
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          backgroundColor="primary"
        />
        <Box
          backgroundColor="white"
          alignItems="center"
          justifyContent="space-evenly"
          padding="xl"
          borderTopLeftRadius="xl"
          flex={1}
        >
          <Text variant="title1">Vamos a empezar</Text>
          <Text variant="text" textAlign="center">
            Inicia sesión o registrate para una experiencia única
          </Text>
          <Button variant="primary" label="Inciar sesión" />
          <Button label="Únete, es gratis!" />
          <Button variant="transparent" label="Olvide mi contraseña" />
        </Box>
      </Box>
    </Box>
  );
};
