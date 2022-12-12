
 export enum CardType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
  DEBIT_CREDIT = "CREDIT_DEBIT"
}
export type Card = {
  id: string;
  number: string;
  name: string;
  flag: string;
  type: CardType.CREDIT | CardType.DEBIT | CardType.DEBIT_CREDIT | "";
};

export type DebitCard = Card & {
  type: "DEBIT_CARD";
};

export type CreditCard = Card & {
  type: "CREDIT_CARD" | "DEBIT_CREDIT_CARD";
  invoiceDay: number;
  limit: number;
};
