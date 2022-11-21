import { SelectOption } from "../../../models";
import { Card } from "../../../models/Card";

export const cards: Card[] = [
  {
    id: "1",
    flag: "ELO",
    name: "Elo Green",
    number: "1234 1245 2983",
    type: "DEBIT_CARD"
  },
  {
    id: "2",
    flag: "VISA",
    name: "Visa Black",
    number: "9849 8389 1234",
    type: "CREDIT_CARD"
  }
];

export const cardOptions: SelectOption[] = cards.map((card) => ({
  label: card.name,
  value: card.id
}));
