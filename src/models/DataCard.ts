import { CardType } from "./Card";

export type DataCard = {
    id: string;
    number: string;
    name: string;
    type: CardType.CREDIT | CardType.DEBIT | CardType.DEBIT_CREDIT | "";
};
