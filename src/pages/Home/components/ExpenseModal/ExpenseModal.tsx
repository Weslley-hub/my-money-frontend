import { Flex, Spinner } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import {
  Button,
  FormInputWithLabel,
  Modal,
  ModalHandles
} from "../../../../components";
import { FormSelectWithLabel } from "../../../../components/FormSelectWithLabel";
import { useExpenses } from "../../contexts/Expenses.context";
import { cardOptions, expenseCategories, paymentMethods } from "../../mocks";
import { ExpenseFormData } from "../../utils";
import { ExpenseValidationSchema } from "../../validation";
import { ExpenseModel } from "../../../../models";

export type ExpenseModalHandles = {
  open: (data?: ExpenseModel) => void;
  close: () => void;
};

export type ExpenseModalProps = {};

const ExpenseModalComponent: React.ForwardRefRenderFunction<
  ExpenseModalHandles,
  ExpenseModalProps
> = (props, ref) => {
  const modalRef = useRef<ModalHandles | null>(null);
  const { addExpense, updateExpense, removeExpense } = useExpenses();

  const [selectedExpense, setSelectedExpense] = useState<ExpenseModel | null>(
    null
  );

  const formInitialValues = useMemo((): ExpenseFormData => {
    if (selectedExpense) {
      return {
        totalAmount: selectedExpense.totalAmount,
        cardId: selectedExpense.cardId || "",
        categoryId: selectedExpense.categoryId,
        description: selectedExpense.description,
        numberOfInstallments: selectedExpense.numberOfInstallments || 0,
        paymentMethod: selectedExpense.paymentMethod
      };
    }

    return {
      totalAmount: 0,
      cardId: "",
      categoryId: "",
      description: "",
      numberOfInstallments: 0,
      paymentMethod: ""
    };
  }, [selectedExpense]);

  function openModal(data?: ExpenseModel) {
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

  async function handleSubmitForm(data: ExpenseFormData) {
    if (!selectedExpense) {
      addExpense({
        totalAmount: data.totalAmount,
        cardId: data.cardId,
        categoryId: data.categoryId,
        description: data.description,
        icon: "🎈",
        paymentMethod: "MONEY",
        id: ""
      });
    } else {
      updateExpense({
        totalAmount: data.totalAmount,
        cardId: data.cardId,
        categoryId: data.categoryId,
        description: data.description,
        icon: "🎈",
        paymentMethod: "MONEY",
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
      title={selectedExpense ? "Atualizar Despesa" : "Cadastrar Despesa"}
      ref={modalRef}
    >
      <Formik<ExpenseFormData>
        initialValues={formInitialValues}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
        validationSchema={ExpenseValidationSchema}
      >
        {({ isSubmitting, handleSubmit, values }) => {
          return (
            <>
              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "description" }}
                placeholder={"Descrição da Despesa"}
                name="description"
                marginBottom={"1rem"}
                label="Descrição"
              />

              <Flex
                direction={"row"}
                alignItems="flex-start"
                justifyContent="space-between"
                width={"100%"}
                marginBottom={"1rem"}
              >
                <FormSelectWithLabel
                  label="Categoria"
                  width={"48%"}
                  formikFieldConfig={{ name: "categoryId" }}
                  placeholder="Categoria"
                  name="categoryId"
                  options={expenseCategories}
                />

                <FormSelectWithLabel
                  label="Forma de Pagamento"
                  width={"48%"}
                  formikFieldConfig={{ name: "paymentMethodId" }}
                  placeholder="Forma de pagamento"
                  name="paymentMethod"
                  options={paymentMethods}
                />
              </Flex>

              {values.paymentMethod !== "MONEY" && values.paymentMethod && (
                <Flex
                  direction={"row"}
                  alignItems="flex-start"
                  justifyContent="space-between"
                  width={"100%"}
                  marginBottom={"1rem"}
                >
                  <FormSelectWithLabel
                    label="Selecione o cartão"
                    width={"48%"}
                    formikFieldConfig={{ name: "cardId" }}
                    placeholder="Cartão"
                    name="cardId"
                    options={cardOptions}
                  />

                  <FormInputWithLabel
                    variant="WITHOUT_ICON"
                    label="Número de parcelas"
                    width={"48%"}
                    formikFieldConfig={{ name: "numberOfInstallments" }}
                    placeholder="Número de parcelas"
                    name="numberOfInstallments"
                  />
                </Flex>
              )}

              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "totalAmount" }}
                placeholder={"Valor total da despesa"}
                name="totalAmount"
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
