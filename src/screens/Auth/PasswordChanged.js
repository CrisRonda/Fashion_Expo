import React from "react";
import { Container, Text, TextInput, Box, Button } from "../../components";
import Footer from "./components/Footer";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../../lib/schemas";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import CloseButton from "../../components/CloseButton";

export default (props) => {
  const { goBack } = useNavigation();
  return (
    <Container pattern={0} footer={<CloseButton onPress={() => goBack()} />}>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Box
          style={{ width: 80, height: 80, borderRadius: 40 }}
          justifyContent="center"
          alignItems="center"
          backgroundColor="primaryLight"
          mb="xl"
        >
          <Text color="primary">
            <Feather name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" mb="s">
          Tu contraseña ha sido restablecida correctamente
        </Text>
        <Text textAlign="center" variant="text" mb="l">
          Ingresa el email asociado a tu cuenta
        </Text>
      </Box>
    </Container>
  );
};
