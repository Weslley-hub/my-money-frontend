import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { ExpenseModel } from "../../../models";
import { ExpenseModal, ExpenseModalHandles } from "../components";

export type ExpensesContextData = {
  expenses: ExpenseModel[];
  addExpense: (expense: ExpenseModel) => void;
  updateExpense: (updatedExpense: ExpenseModel) => void;
  removeExpense: (expenseId: string) => void;
  openExpenseModal(data?: ExpenseModel): void;
};

const ExpensesContext = createContext<ExpensesContextData>(
  {} as ExpensesContextData
);

type ExpenseProviderProps = {
  children: ReactNode;
};

export const ExpensesProvider = ({ children }: ExpenseProviderProps) => {
  const expenseModalRef = useRef<ExpenseModalHandles | null>(null);

  const [expenses, setExpenses] = useState<ExpenseModel[]>([]);

  function addExpense(expense: ExpenseModel) {
    const newExpenses = [
      ...expenses,
      { ...expense, id: new Date().toISOString() }
    ];
    setExpenses(newExpenses);
  }

  function updateExpense(updatedExpense: ExpenseModel) {
    const otherExpenses = expenses.filter(
      (expense) => expense.id !== updatedExpense.id
    );
    setExpenses([...otherExpenses, updatedExpense]);
  }

  function removeExpense(expenseId: string) {
    const remainingExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(remainingExpenses);
  }

  function openExpenseModal(data?: ExpenseModel) {
    expenseModalRef.current?.open(data);
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        removeExpense,
        updateExpense,
        openExpenseModal
      }}
    >
      {children}

      <ExpenseModal ref={expenseModalRef} />
    </ExpensesContext.Provider>
  );
};

export const useExpenses = (): ExpensesContextData => {
  const contextData = useContext(ExpensesContext);
  return { ...contextData };
};
