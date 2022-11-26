import * as Yup from "yup";

const CategorieValidationSchema = Yup.object().shape({
  description: Yup.string().required("Descrição do gasto é obrigatória")
});

export { CategorieValidationSchema };
