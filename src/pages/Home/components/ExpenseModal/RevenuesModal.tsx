import { Flex, Spinner } from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import { useImperativeHandle, useMemo, useRef, useState } from "react";
import { Button, FormInputWithLabel, Modal, ModalHandles } from "../../../../components";
import { FormSelectWithLabel } from "../../../../components/FormSelectWithLabel";
import { RevenueModel } from "../../../../models/Revenues";
import { useRevenues } from "../../contexts/Revenue.context";


import { categoriesOptions , expenseCategories, paymentMethods } from "../../mocks";


import { RevenuesFormData } from "../../utils/RevenuesFormData";
import { RevenuesValidationSchema } from "../../validation";



export type RevenuesModalHandles = {
  open: (data?: RevenueModel) => void;
  close: () => void;
};

export type RevenuesModalProps = {};

const RevenuesModalComponent: React.ForwardRefRenderFunction<
  RevenuesModalHandles,
  RevenuesModalProps
> = (_props, ref) => {
  const modalRef = useRef<ModalHandles | null>(null);
  const { addRevenue, updateRevenue, removeRevenue } = useRevenues();

  const [selectedRevenue, setSelectedRevenue] = useState<RevenueModel | null>(
    null
  );

  const formInitialValues = useMemo((): RevenuesFormData => {
    if (selectedRevenue) {
      return {
          month: selectedRevenue.month,
          year: selectedRevenue.year,
          usedAmount: selectedRevenue.usedAmount,
          totalAmount: selectedRevenue.totalAmount
      };
    }

    return {
        id:"",
        month:"",
        year:"",
        usedAmount: "",
        totalAmount: ""
    };
  }, [selectedRevenue]);

  function openModal(data?: RevenueModel) {
    modalRef.current?.open();
    setSelectedRevenue(data || null);
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

  async function handleSubmitForm(data: RevenuesFormData) {
    if (!selectedRevenue) {
      addRevenue({
         id: "",
         month: data.month,
         year: data.year,
         usedAmount: data.usedAmount,
         totalAmount: data.totalAmount, 
      });

    } else {
      updateRevenue({
         month: data.month,
         year: data.year,
         usedAmount: data.usedAmount,
         totalAmount: data.totalAmount, 
        id: selectedRevenue.id
      });
    }

    closeModal();
  }

  async function handleDeleteRevenue() {
    removeRevenue(selectedRevenue?.id!);
    closeModal();
  }

  return (
    <Modal
      title={selectedRevenue ? "Atualizar Receita" : "Cadastrar Receita"}
      ref={modalRef}
    >
      <Formik<RevenuesFormData>
        initialValues={formInitialValues}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
        validationSchema={RevenuesValidationSchema}
      >
        {({ isSubmitting, handleSubmit }) => {
          return (
            <>
              <Flex
                direction={"row"}
                  alignItems="flex-start"
                  justifyContent="space-between"
                  width={"100%"}
                  marginBottom={"1rem"}
              >

              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "month" }}
                placeholder={"Mês"}
                name="month"
                marginBottom={"1rem"}
                label="Mês"
                width={"48%"}
              />

              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "year" }}
                placeholder={"Ano"}
                name="year"
                marginBottom={"1rem"}
                label="Ano"
                width={"48%"}
              />

              </Flex>

              <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "totalAmount" }}
                placeholder={"Receita"}
                name="totalAmount"
                marginBottom={"1rem"}
                label="Receita"
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
                    width={"75%"}
                    formikFieldConfig={{ name: "categorieId" }}
                    placeholder="Categoria"
                    name="categorieId"
                    options={categoriesOptions}
                  />

                  <FormInputWithLabel
                    label="Porcentagem"
                    variant="WITHOUT_ICON"
                    placeholder="%"
                    width={"24%"}
                    formikFieldConfig={{ name: "numberOfInstallments" }}
                    name="numberOfInstallments"
                  />
                </Flex>

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
                    {selectedRevenue && (
                      <Button
                        onClick={handleDeleteRevenue}
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

const RevenuesModal = React.forwardRef(RevenuesModalComponent);
export { RevenuesModal };
