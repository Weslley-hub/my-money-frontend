import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { ApiErrorResponse } from "../../../global/types/apiErrorResponse";
import { CategorieModel,  } from "../../../models";
import api from "../../../services/Api";
import { showErrorToast, showSucessToast } from "../../../services/ToastService";
import { CategorieModal, CategorieModalHandles } from "../components";

export type CategorieContextData = {
  categories: CategorieModel[];
  addCategorie: (categorie: CategorieModel) => void;
  updateCategorie: (updatedCategorie: CategorieModel) => void;
  removeCategorie: (categorieId: string) => void;
  openCategorieModal(data?: CategorieModel): void;
};

const CategorieContext = createContext<CategorieContextData>(
  {} as CategorieContextData
);

type CategorieProviderProps = {
  children: ReactNode;
};

async function handleDadosBanco() {
  console.log("aqui");
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers:{
        authorization: token
      }
    };
    const response = await api.get("expense-categories", config);
    console.log(response);
    return response;
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return apiError;
  }
}

var initialState: CategorieModel[]= [
  { 
    id: "1", name: "Automovel", icon:"🚘"
  },

  {
   id: "2", name: "Alimentação", icon:"🍔"
  },

  {
   id: "3", name: "Residência", icon:"🏠"
  }
  ];

// const CategoriasDoBanco = await handleDadosBanco();
//console.log(CategoriasDoBanco?.data[5]);


export const CategorieProvider = ({ children }: CategorieProviderProps) => {
  const categorieModalRef = useRef<CategorieModalHandles | null>(null);

  const [categories, setCategories] = useState<CategorieModel[]>(initialState);

  function addCategorie(categorie: CategorieModel) {
    const newCategories = [
      ...categories,
      { ...categorie, id: new Date().toISOString() }
    ];
    setCategories(newCategories);
  }

  function updateCategorie(updatedCategorie: CategorieModel) {
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

  function openCategorieModal(data?: CategorieModel) {
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
