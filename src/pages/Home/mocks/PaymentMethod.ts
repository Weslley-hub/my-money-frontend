import { PaymentMethodEnum, SelectOption } from "../../../models";

export const paymentMethods: SelectOption[] = [
  {
    label: "Dinheiro",
    value: PaymentMethodEnum.MONEY
  },
  {
    label: "Cartão",
    value: PaymentMethodEnum.CARD
  }
];
