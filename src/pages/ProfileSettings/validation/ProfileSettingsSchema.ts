import * as Yup from "yup";

const ProfileSettingsValidationSchema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
    .email("E-mail deve ser válido")
    .required("E-mail é obrigatório"),
  password: Yup.string().required("Senha é obrigatória"),
});

export { ProfileSettingsValidationSchema };