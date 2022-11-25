import * as Yup from "yup";

const ExpenseValidationSchema = Yup.object().shape({
  description: Yup.string().required("Descrição do gasto é obrigatória")
});

export { ExpenseValidationSchema };
