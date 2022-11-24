import { Flex, Spinner } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import {
  Button,
  FormInputWithLabel,
  Modal,
  ModalHandles
} from "../../../../components";
import { useCategorie } from "../../contexts/Categorie.context";
import { CategorieFormData } from "../../utils";
import { ExpenseValidationSchema } from "../../validation";
import { CategorieModel } from "../../../../models";

export type ExpenseModalHandles = {
  open: (data?: CategorieModel) => void;
  close: () => void;
};

export type ExpenseModalProps = {};

const ExpenseModalComponent: React.ForwardRefRenderFunction<
  ExpenseModalHandles,
  ExpenseModalProps
> = (props, ref) => {
  const modalRef = useRef<ModalHandles | null>(null);
  const { addExpense, updateExpense, removeExpense } = useCategorie();

  const [selectedExpense, setSelectedExpense] = useState<CategorieModel | null>(
    null
  );

  const formInitialValues = useMemo((): CategorieFormData => {
    if (selectedExpense) {
      return {
        id: selectedExpense.id,
        description: selectedExpense.description,
        icon: selectedExpense.icon,
      };
    }

    return {
     id: " ",
     description: " ",
     icon: " ",
    };
  }, [selectedExpense]);

  function openModal(data?: CategorieModel) {
    modalRef.current?.open();
    setSelectedExpense(data || null);
  }

  function closeModal() {
    modalRef.current?.close();
  }

  useImperativeHandle(ref, () => {
    return {
      close: closeModal,
      open: openModal
    };
  });

  async function handleSubmitForm(data: CategorieFormData) {
    if (!selectedExpense) {
      addExpense({
        description: data.description,
        icon: "🎈",
        id: " "
      });
    } else {
      updateExpense({
        description: data.description,
        icon: "🎈",
        id: selectedExpense.id
      });
    }

    closeModal();
  }

  async function handleDeleteExpense() {
    removeExpense(selectedExpense?.id!);
    closeModal();
  }

  return (
    <Modal
      title={selectedExpense ? "Atualizar Categoria" : "Cadastrar Categoria"}
      ref={modalRef}
    >
      <Formik<CategorieFormData>
        initialValues={formInitialValues}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
        
      >
        {({ isSubmitting, handleSubmit }) => {
          return (
            <>
              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "description" }}
                placeholder={"Nome da categoria"}
                name="description"
                marginBottom={"1rem"}
                label="Descrição"
              />
              
             

              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "totalAmount" }}
                placeholder={"Valor total da despesa"}
                name="id"
                marginBottom={"1rem"}
                label="Valor Total da Despesa"
                type="number"
              />

              <Flex
                width={"100%"}
                justifyContent={"flex-end"}
                alignItems={"center"}
                marginTop={"1.5rem"}
                marginBottom={"1.5rem"}
              >
                {isSubmitting ? (
                  <Spinner
                    color="primary.900"
                    marginTop={"2rem"}
                    marginRight={"1rem"}
                  />
                ) : (
                  <>
                    <Button
                      onClick={() => handleSubmit()}
                      background={"primary.900"}
                      color={"white"}
                      width={"6rem"}
                      marginLeft={"1rem"}
                      paddingY={"1.2rem"}
                      disabled={isSubmitting}
                    >
                      Salvar
                    </Button>

                    {selectedExpense && (
                      <Button
                        onClick={handleDeleteExpense}
                        background={"alert.900"}
                        color={"white"}
                        width={"6rem"}
                        paddingY={"1.2rem"}
                        marginLeft={"1rem"}
                        disabled={isSubmitting}
                      >
                        Excluir
                      </Button>
                    )}
                  </>
                )}
              </Flex>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

const ExpenseModal = React.forwardRef(ExpenseModalComponent);
export { ExpenseModal };
