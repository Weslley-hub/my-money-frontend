import { Flex, Spinner, Text, Button as ChakraUiButton, useToast, Icon, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import {
  Button,
  FormInputWithLabel,
  Modal,
  ModalHandles
} from "../../../../components";
import { useCard } from "../../contexts/Categorie.context";
import { CardValidationSchema } from "../../validation";
import { Card, CardType } from "../../../../models/Card";
import { FormSelectWithLabel } from "../../../../components/FormSelectWithLabel";
import { CardOptions } from "../../mocks";
import { FlagsOptions } from "../../mocks/FlagsOption";
import { DataCard } from "../../../../models/DataCard";

export type CardModalHandles = {
  open: (data?: Card) => void;
  close: () => void;
};

export type CardModalProps = {};

const CardModalComponent: React.ForwardRefRenderFunction<
  CardModalHandles,
  CardModalProps
> = (props, ref) => {
  const modalRef = useRef<ModalHandles | null>(null);
  const { addCard, updateCard, removeCard} = useCard();

  const [selectedCard, setSelectedCard] = useState<Card | null>(
    null
  );
 
  const formInitialValues = useMemo((): Card => {
    if (selectedCard) {
      return {
        id: selectedCard.id,
        name: selectedCard.name,
        number: selectedCard.number,
        flag: selectedCard.flag,
        type: selectedCard.type,
      };
    }

    return {
      id: "",
      number: "",
      name: "",
      flag: "",
      type: "",
    };
  }, [selectedCard]);

  function openModal(data?: Card) {
    modalRef.current?.open();
    setSelectedCard(data || null);
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

  async function handleSubmitForm(data: DataCard) {



    if (!selectedCard) {
      //ADD CREDIT_CARD /api/v1/credit-cards
      //ADD DEBIT_CARD /api/v1/debit-cards
      // addCard({
      //   name: data.name,
      //   flag: data.flag,
      //   id: " ",
      //   number: data.number,
      //   type: data.type,
      // });
      if(data.type == CardType.CREDIT || data.type == CardType.DEBIT_CREDIT){
        //POST CREDIT_CARD /api/v1/credit-cards
      }
      if(data.type == CardType.DEBIT){
        //POST DEBIT_CARD /api/v1/debit-cards
      }

    } else {
      //UPDATE CREDIT_CARD /api/v1/credit-cards
      //UPDATE DEBIT_CARD /api/v1/debit-cards
      if(data.type == CardType.CREDIT || data.type == CardType.DEBIT_CREDIT){
        //PUT CREDIT_CARD /api/v1/credit-cards
      }
      if(data.type == CardType.DEBIT){
        //PUT DEBIT_CARD /api/v1/debit-cards
      }
      // updateCard({
      //   name: data.name,
      //   flag: data.flag,
      //   id: selectedCard.id,
      //   number: data.number,
      //   type: data.type,
      // });
    }

    closeModal();
  }

  async function handleDeleteCard() {
    removeCard(selectedCard?.id!);
    closeModal();
  }

  return (
    <Modal
      title={selectedCard? "Atualizar Cartão" : "Cadastrar Cartão"}
      ref={modalRef}
      
    >
      <Formik<Card> 
        initialValues={{name: "", number:"", type: "", flag:""}}
        onSubmit={async (data, { setSubmitting }) => {
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
        validationSchema = {CardValidationSchema}
      >
        {({ isSubmitting, handleSubmit }) => {
          return (
            <>
            <Form>
             <Flex>
        <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "name" }}
                placeholder={"Nome"}
                name="name"
                marginBottom={"1rem"}
                label=""
              />
              
              
        
        <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "number" }}
                placeholder={"Número do cartão"}
                name="number"
                marginLeft={"1.5rem"}
                marginBottom={"1rem"}
                label=""
              /></Flex>
              <Flex>
              <FormSelectWithLabel
                  label="Tipo"
                  width={"45%"}
                  formikFieldConfig={{ name: "type" }}
                  placeholder="Tipo do Cartão"
                  name="type"
                  options={CardOptions}
             
              />
              <FormSelectWithLabel
                  label="Bandeira do cartão"
                  width={"45%"}
                  formikFieldConfig={{ name: "flag" }}
                  placeholder="Bandeira"
                  name="flag"
                  marginLeft={"1.5rem"}
                  options={FlagsOptions}
             
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

                    {selectedCard && (
                      <Button
                        onClick={handleDeleteCard}
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
              </Form>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
};

const CardModal = React.forwardRef(CardModalComponent);
export { CardModal };
 

