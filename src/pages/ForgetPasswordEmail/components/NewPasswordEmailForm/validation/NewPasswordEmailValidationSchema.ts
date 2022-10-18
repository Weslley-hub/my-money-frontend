import * as Yup from "yup";

const NewPasswordEmailValidationSchema = Yup.object().shape({
  email: Yup.string().required("Email é obrigatório").email("Email inválido"),
  
});

export { NewPasswordEmailValidationSchema };
