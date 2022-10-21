import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail deve ser válido")
    .required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatória"),
});

export { LoginValidationSchema };
