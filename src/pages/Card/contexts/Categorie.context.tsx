import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Card } from "../../../models/Card";
import { CategorieModal, CategorieModalHandles } from "../components";

export type CategorieContextData = {
  categories: Card[];
  addCategorie: (categorie: Card) => void;
  updateCategorie: (updatedCategorie: Card) => void;
  removeCategorie: (categorieId: string) => void;
  openCategorieModal(data?: Card): void;
};

const CategorieContext = createContext<CategorieContextData>(
  {} as CategorieContextData
);

type CategorieProviderProps = {
  children: ReactNode;
};

const initialState: Card[]= [
  {
  id: "1",
  name: "Automovel",
  flag:"🚘",
  number :"123",
  type: "CREDIT_CARD"
  
  },
  {
    id: "2",
  name: "Alimentação",
  flag:"🍔",
  number :"456",
  type: "DEBIT_CARD"
  
  },
  {
    id: "3",
    name: "Pai",
    flag:"🧙‍♂️",
    number :"789",
    type: "DEBIT_CREDIT_CARD"
    
    }
  
  
  ];
export const CategorieProvider = ({ children }: CategorieProviderProps) => {
  const categorieModalRef = useRef<CategorieModalHandles | null>(null);

  const [categories, setCategories] = useState<Card[]>(initialState);

  function addCategorie(categorie: Card) {
    const newCategories = [
      ...categories,
      { ...categorie, id: new Date().toISOString() }
    ];
    setCategories(newCategories);
  }

  function updateCategorie(updatedCategorie: Card) {
    const otherCategories = categories.filter(
      (categorie) => categorie.id !== updatedCategorie.id
    );
    setCategories([...otherCategories, updatedCategorie]);
  }

  function removeCategorie(categorieId: string) {
    const remainingCategories = categories.filter(
      (categorie) => categorie.id !== categorieId
    );
    setCategories(remainingCategories);
  }

  function openCategorieModal(data?: Card) {
    categorieModalRef.current?.open(data);
  }

  return (
    <CategorieContext.Provider
      value={{
        categories,
        addCategorie,
        removeCategorie,
        updateCategorie,
        openCategorieModal
      }}
    >
      {children}

      <CategorieModal ref={categorieModalRef} />
    </CategorieContext.Provider>
  );
};

export const useCategorie = (): CategorieContextData => {
  const contextData = useContext(CategorieContext);
  return { ...contextData };
};
