import { SelectOption } from "../../../models";
import { CardType } from "../../../models/Card";

export const CardOptions: SelectOption[] = [
  {
    label: "Crédito",
    value: CardType.CREDIT
  },
  {
    label: "Débito",
    value: CardType.DEBIT
  },
  {
    label: "Débito/Crédito",
    value: CardType.DEBIT_CREDIT
  }
];
