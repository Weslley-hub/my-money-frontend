type CardType = "CREDIT_CARD" | "DEBIT_CARD" | "DEBIT_CREDIT_CARD";

export type Card = {
  id: string;
  number: string;
  name: string;
  flag: string;
  type: CardType;
};

export type DebitCard = Card & {
  type: "DEBIT_CARD";
};

export type CreditCard = Card & {
  type: "CREDIT_CARD" | "DEBIT_CREDIT_CARD";
  invoiceDay: number;
  limit: number;
};
