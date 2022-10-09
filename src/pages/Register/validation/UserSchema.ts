import * as Yup from "yup";

const UserValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome completo é obrigatório"),
  email: Yup.string()
    .email("E-mail deve ser válido")
    .required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatória"),
});

export { UserValidationSchema };
