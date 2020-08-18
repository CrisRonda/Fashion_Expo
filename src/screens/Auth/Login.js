import React, { useRef } from "react";
import { Container, Text, TextInput, Box, Button } from "../../components";
import Footer from "./components/Footer";
import Checkbox from "../../components/Checkbox";
import { useFormik } from "formik";
import { SignInSchema } from "../../lib/schemas";
import { useNavigation } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

export default (props) => {
  const passwordRef = useRef(null);
  const { navigate } = useNavigation();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    onSubmit: (value, setSubmitting) => onSubmit(value, setSubmitting),
  });
  const onSubmit = (value, setSubmitting) => {
    alert("Valores");
  };
  return (
    <Container
      pattern={0}
      footer={
        <Footer
          title="No tienes una cuenta? "
          action="Registrate"
          onPress={() => navigate("SignUp")}
        />
      }
    >
      <Text variant="title1" textAlign="center" mb="s">
        ¡Bienvenido de nuevo!
      </Text>
      <Text textAlign="center" variant="text" mb="l">
        Usa tus credenciales para iniciar sesión
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
          returnKeyType="next"
          returnKeyLabel="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <TextInput
          ref={passwordRef}
          icon="lock"
          placeholder="Ingresa tu contraseña"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={handleSubmit}
          secureTextEntry
        />
        <Box justifyContent="space-between" flexDirection="row" mb="m">
          <Checkbox
            label="Recuerdame"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <Button
            variant="transparent"
            onPress={() => navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Olvide mi contraseña
            </Text>
          </Button>
        </Box>
        <Box alignItems="center" mt="l">
          <Button
            variant="primary"
            label="Iniciar sesión"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};
