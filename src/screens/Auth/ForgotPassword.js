import React from "react";
import { Container, Text, TextInput, Box, Button } from "../../components";
import Footer from "./components/Footer";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "../../lib/schemas";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

const initialValues = {
  email: "test@test.com",
};

export default (props) => {
  const { navigate, goBack } = useNavigation();
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: ForgotPasswordSchema,
      onSubmit: (values) => onSubmit(values),
    }
  );
  const onSubmit = (values) => {
    console.log(values);
    navigate("PasswordChanged");
  };
  return (
    <Container
      pattern={2}
      footer={
        <Footer
          title="¿No funciona? "
          action="Prueba otra forma"
          onPress={() => Linking.openURL("mailto:cristian.j005@gmail.com")}
        />
      }
    >
      <Box justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" mb="s">
          ¿Olvidaste tu contraseña?
        </Text>
        <Text textAlign="center" variant="text" mb="l">
          Ingresa el email asociado a tu cuenta
        </Text>
        <Box>
          <TextInput
            icon="mail"
            placeholder="Correo electrónico"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            autoCapitalize="none"
            autoCompleteType="email"
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={handleSubmit}
          />

          <Box alignItems="center" mt="l">
            <Button
              variant="primary"
              label="Restablecer contraseña"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
