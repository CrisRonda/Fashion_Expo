import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Ingresa una email valido").required("Requerido"),
  password: Yup.string()
    .min(2, "Muy corto!")
    .max(10, "Muy largo!")
    .required("Requerido"),
  passwordConfirm: Yup.string()
    .equals([Yup.ref("password")], "Las contraseñas no son iguales")
    .required("Requerido"),
});
export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Ingresa una email valido").required("Requerido"),
  password: Yup.string()
    .min(2, "Muy corto!")
    .max(10, "Muy largo!")
    .required("Requerido"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Ingresa una email valido").required("Requerido"),
});
