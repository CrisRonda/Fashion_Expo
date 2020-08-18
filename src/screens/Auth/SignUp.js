import React, { useRef } from "react";
import { Container, Text, TextInput, Box, Button } from "../../components";
import Footer from "./components/Footer";
import { useFormik } from "formik";
import { SignUpSchema } from "../../lib/schemas";
import { useNavigation } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
  passwordConfirm: "",
};

export default (props) => {
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const { navigate, goBack } = useNavigation();
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values) => onSubmit(values),
    }
  );
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container
      pattern={1}
      footer={
        <Footer
          title="¿Ya tienes una cuenta? "
          action="Inicia sesión"
          onPress={() => goBack()}
        />
      }
    >
      <Text variant="title1" textAlign="center" mb="s">
        Crea una cuenta
      </Text>
      <Text textAlign="center" variant="text" mb="l">
        Crea una cuenta con tu nombre, email y contraseña
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
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          secureTextEntry
        />
        <TextInput
          ref={passwordConfirmRef}
          icon="lock"
          placeholder="Repite la contraseña"
          onChangeText={handleChange("passwordConfirm")}
          onBlur={handleBlur("passwordConfirm")}
          error={errors.passwordConfirm}
          touched={touched.passwordConfirm}
          //   autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={handleSubmit}
          secureTextEntry
        />
        <Box alignItems="center" mt="l">
          <Button
            variant="primary"
            label="Crear cuenta"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};
