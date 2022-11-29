import { Flex, Spinner, Text, Button as ChakraUiButton, useToast, Icon, Box } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import {
  Button,
  FormInputWithLabel,
  Modal,
  ModalHandles
} from "../../../../components";
import { useCategorie } from "../../contexts/Categorie.context";
import { CategorieValidationSchema } from "../../validation";
import { showErrorToast } from "../../../../services/ToastService";
import { Card } from "../../../../models/Card";

export type CategorieModalHandles = {
  open: (data?: Card) => void;
  close: () => void;
};

export type CategorieModalProps = {};

const defaultIcons = ["🚘", "🍔", "👴"];

type IconButtonProps = {
  icon: string;
  onSelectIcon: (icon: string) => void;
  isSelected: boolean;
}


function IconButton(props: IconButtonProps){

  function handleButtonClick(){
   
    props.onSelectIcon(props.icon);
  }

  return (
    <ChakraUiButton 
      alignItems={"center"} 
      justifyContent={"center"} 
      height={"4rem"} 
      width={"4rem"} 
      background={props.isSelected ? "primary.900" : "gray.300"}
      marginRight={"1rem"}
      onClick={handleButtonClick}
    >
      <Text fontSize={"1.4rem"}>{props.icon}</Text>
    </ChakraUiButton>
  );
}

const CategorieModalComponent: React.ForwardRefRenderFunction<
  CategorieModalHandles,
  CategorieModalProps
> = (props, ref) => {
  const modalRef = useRef<ModalHandles | null>(null);
  const { addCategorie, updateCategorie, removeCategorie} = useCategorie();

  const [selectedCategorie, setSelectedCategorie] = useState<Card | null>(
    null
  );
  const [selectedIcon, setSelectedIcon] = useState("");

  const formInitialValues = useMemo((): Card => {
    if (selectedCategorie) {
      return {
        id: selectedCategorie.id,
        name: selectedCategorie.name,
        number: selectedCategorie.number,
        flag: selectedCategorie.flag,
        type: selectedCategorie.type,
      };
    }

    return {
      id: " ",
      number: " ",
      name: " ",
      flag: " ",
      type: "DEBIT_CARD",
    };
  }, [selectedCategorie]);

  function openModal(data?: Card) {
    modalRef.current?.open();
    setSelectedCategorie(data || null);
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

  
  function handleClickIconButton(icon: string){
    setSelectedIcon(icon);
  }
  const toast = useToast();
  async function handleSubmitForm(data: Card) {

    
     if(!selectedIcon){
     showErrorToast(toast, "Selecione um ícone")
      return;
     }


    if (!selectedCategorie) {
      addCategorie({
        name: data.name,
        flag: selectedIcon,
        id: " ",
        number: data.number,
        type: data.type,
      });
    } else {
      updateCategorie({
        name: data.name,
        flag: selectedIcon,
        id: selectedCategorie.id,
        number: data.number,
        type: data.type,
      });
    }

    closeModal();
  }

  async function handleDeleteExpense() {
    removeCategorie(selectedCategorie?.id!);
    closeModal();
  }

  return (
    <Modal
      title={selectedCategorie? "Atualizar Categoria" : "Cadastrar Categoria"}
      ref={modalRef}
      
    >
      <Formik<Card> 
        initialValues={formInitialValues}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
        validationSchema = {CategorieValidationSchema}
      >
        {({ isSubmitting, handleSubmit }) => {
          return (
            <>
              <Flex
      alignItems={"center"} 
      justifyContent ={"center"}
      height={"6rem"} 
      width="70%" 
      background={"gray.300"}
      borderRadius = {"20px"}
      marginRight={"1rem"}
      marginLeft = {"4rem"}>
      
        <Flex alignItems={"center"} 
        justifyContent ={"center"}
        background={"gray"} 
        height={"4rem"}
        width = "20%" 
        borderRadius = {"20px"}
        marginRight={"1rem"} >
        <Text fontSize={"3rem"}>{selectedIcon}</Text></Flex>
        <Box alignSelf={"flex-end"}>
        <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "name" }}
                placeholder={"Nome da categoria"}
                name="name"
                marginBottom={"1rem"}
                label=""
               
                
              />
              </Box>
              
        </Flex>
        <FormInputWithLabel
                variant="WITHOUT_ICON"
                formikFieldConfig={{ name: "number" }}
                placeholder={"Descrição da Despesa"}
                name="number"
                marginBottom={"1rem"}
                label="Descrição"
              />
              
              <Flex paddingY={"40px"} marginLeft = {"7rem"}>
                {defaultIcons.map(
                  (icon) => (
                    <IconButton isSelected={selectedIcon === icon} onSelectIcon={handleClickIconButton} key={icon} icon={icon} />)
                  )
                }
                <Flex 
              alignItems={"center"} 
              justifyContent={"center"} 
              height={"4rem"} 
              width={"4rem"} 
              borderRadius ={"5px"}
              background={"gray.300"}
              marginRight={"1rem"}></Flex>
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

                    {selectedCategorie && (
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

const CategorieModal = React.forwardRef(CategorieModalComponent);
export { CategorieModal };
 

