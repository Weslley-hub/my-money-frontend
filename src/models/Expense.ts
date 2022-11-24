import { PaymentMethod } from "./PaymentMethod";

export type ExpenseModel = {
  id: string;
  description: string;
  categoryId: string;
  paymentMethod: PaymentMethod;
  cardId?: string;
  totalAmount: number;
  icon: string;
  numberOfInstallments?: number;
};
