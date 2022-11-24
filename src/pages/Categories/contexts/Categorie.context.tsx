import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { CategorieModel,  } from "../../../models";
import { ExpenseModal, ExpenseModalHandles } from "../components";

export type CategorieContextData = {
  expenses: CategorieModel[];
  addExpense: (expense: CategorieModel) => void;
  updateExpense: (updatedExpense: CategorieModel) => void;
  removeExpense: (expenseId: string) => void;
  openExpenseModal(data?: CategorieModel): void;
};

const ExpensesContext = createContext<CategorieContextData>(
  {} as CategorieContextData
);

type ExpenseProviderProps = {
  children: ReactNode;
};

const initialState: CategorieModel[]= [
  {
    id: "1",
  description: "Automovel",
  icon:"🚘"
  },
  {
  id: "2",
  description: "Alimentação",
  icon:"🍔"
  },
  {
    id: "3",
    description: "Jorge",
    icon:"👴"
    }
  
  
  ];
export const ExpensesProvider = ({ children }: ExpenseProviderProps) => {
  const expenseModalRef = useRef<ExpenseModalHandles | null>(null);

  const [expenses, setExpenses] = useState<CategorieModel[]>(initialState);

  function addExpense(expense: CategorieModel) {
    const newExpenses = [
      ...expenses,
      { ...expense, id: new Date().toISOString() }
    ];
    setExpenses(newExpenses);
  }

  function updateExpense(updatedExpense: CategorieModel) {
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

  function openExpenseModal(data?: CategorieModel) {
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

export const useCategorie = (): CategorieContextData => {
  const contextData = useContext(ExpensesContext);
  return { ...contextData };
};
