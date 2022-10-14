import * as Yup from "yup";

const NewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required("Senha é obrigatória"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Senhas não são iguais")
    .required("Confirmação de senha é obrigatória"),
});

export { NewPasswordValidationSchema };
