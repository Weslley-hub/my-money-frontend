import { Flex, Spinner, Text, Button as ChakraUiButton } from "@chakra-ui/react";
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

export type CategorieModalHandles = {
  open: (data?: CategorieModel) => void;
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
    console.log("IconButton", props.icon);
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

  const [selectedCategorie, setSelectedCategorie] = useState<CategorieModel | null>(
    null
  );
  const [selectedIcon, setSelectedIcon] = useState("");

  const formInitialValues = useMemo((): CategorieFormData => {
    if (selectedCategorie) {
      return {
        id: selectedCategorie.id,
        description: selectedCategorie.description,
        icon: selectedCategorie.icon,
      };
    }

    return {
     id: " ",
     description: " ",
     icon: " ",
    };
  }, [selectedCategorie]);

  function openModal(data?: CategorieModel) {
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
    console.log("MODAL", icon);
    setSelectedIcon(icon);
  }

  async function handleSubmitForm(data: CategorieFormData) {
    if (!selectedCategorie) {
      addCategorie({
        description: data.description,
        icon: "🎈",
        id: " "
      });
    } else {
      updateCategorie({
        description: data.description,
        icon: "🎈",
        id: selectedCategorie.id
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
              
              <Flex >
                {defaultIcons.map(
                  (icon) => (
                    <IconButton isSelected={selectedIcon === icon} onSelectIcon={handleClickIconButton} key={icon} icon={icon} />)
                  )
                }
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
