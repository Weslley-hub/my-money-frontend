import { emailIcon } from "../../../assets/images/icons";
import { SelectOption } from "../../../models";
import { CardType } from "../../../models/Card";

export const FlagsOptions: SelectOption[] = [
  {
    label: "ELO",
    value: CardType.CREDIT
  },
  {
    label: "Mastercard",
    value: CardType.DEBIT
  },
  {
    label: "Visa",
    value: CardType.DEBIT_CREDIT
  }
];
