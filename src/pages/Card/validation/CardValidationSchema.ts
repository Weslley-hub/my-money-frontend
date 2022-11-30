import * as Yup from "yup";

const CardValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome do cartão é obrigatório"),
  number: Yup.string().required("Número do cartão é obrigatório"),
  type: Yup.string().required("Tipo do Cartão é obrigatório"),
  

});

export { CardValidationSchema };
