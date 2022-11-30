import * as Yup from "yup";

const RevenuesValidationSchema = Yup.object().shape({
  description: Yup.string().required("Descrição do gasto é obrigatória"),
  categoryId: Yup.string().required("Categoria da despesa é obrigatória")
});

export { RevenuesValidationSchema };
