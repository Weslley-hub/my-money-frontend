import { PaymentMethod } from "./PaymentMethod";

export type RevenueModel = {
  id: string;
  month: string;
  year: number;
  usedAmount: number;
  totalAmount: number;
};
