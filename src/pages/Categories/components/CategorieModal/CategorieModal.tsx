import {
  Flex,
  Spinner,
  Text,
  Button as ChakraUiButton,
  useToast,
  Box
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";

import { Form, Formik } from "formik";
import React, { useImperativeHandle, useRef, useState } from "react";
import {
  Button,
  FormInput,
  FormInputWithLabel,
  Modal,
  ModalHandles
} from "../../../../components";
import { useCategorie } from "../../contexts/Categorie.context";
import { CategorieFormData } from "../../utils";
import { CategorieValidationSchema } from "../../validation";
import { CategorieModel } from "../../../../models";
import { showErrorToast } from "../../../../services/ToastService";
import EmojiPicker from "emoji-picker-react";

export type CategorieModalHandles = {
  open: (data?: CategorieModel) => void;
  close: () => void;
};

export type CategorieModalProps = {};

const defaultIcons = ["🚘", "🍔", "🏠"];

type IconButtonProps = {
  icon: string;
  onSelectIcon: (icon: string) => void;
  isSelected: boolean;
};

function IconButton(props: IconButtonProps) {
  function handleButtonClick() {
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
  const toast = useToast();
  const modalRef = useRef<ModalHandles | null>(null);
  const { addCategorie, updateCategorie, removeCategorie } = useCategorie();

  const [selectedCategorie, setSelectedCategorie] =
    useState<CategorieModel | null>(null);
  const [selectedIcon, setSelectedIcon] = useState("");

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  function handleClickIconButton(icon: string) {
    setSelectedIcon(icon);
  }

  async function handleSubmitForm(data: CategorieFormData) {
    console.log("aqui");

    if (!selectedIcon) {
      showErrorToast(toast, "Selecione um ícone");
      return;
    }
    if (!selectedCategorie) {
      addCategorie({
        description: data.description,
        icon: selectedIcon,
        id: " "
      });
    } else {
      updateCategorie({
        description: data.description,
        icon: selectedIcon,
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
      title={selectedCategorie ? "Atualizar Categoria" : "Cadastrar Categoria"}
      ref={modalRef}
    >
      <Formik<CategorieFormData>
        initialValues={{ description: "", icon:" ", id: ""}}
        validationSchema={CategorieValidationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          await handleSubmitForm(data);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleSubmit }) => {
          return (
            <Form>
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                height={"6rem"}
                width="70%"
                background={"gray.300"}
                borderRadius={"20px"}
                marginRight={"1rem"}
                marginLeft={"4rem"}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  background={"gray"}
                  height={"4rem"}
                  width="20%"
                  borderRadius={"20px"}
                  marginRight={"1rem"}
                >
                  <Text fontSize={"3rem"}>{selectedIcon}</Text>
                </Flex>
                <Box alignSelf={"flex-end"}>
                  <FormInputWithLabel
                    variant="WITHOUT_ICON"
                    formikFieldConfig={{ name: "description" }}
                    placeholder={"Nome da categoria"}
                    name="description"
                    marginBottom={"1rem"}
                    label=""
                  />
                </Box>
              </Flex>
              <Flex paddingY={"40px"} marginLeft={"7rem"}>
                {defaultIcons.map((icon) => (
                  <IconButton
                    isSelected={selectedIcon === icon}
                    onSelectIcon={handleClickIconButton}
                    key={icon}
                    icon={icon}
                  />
                ))}

                <ChakraUiButton
                  alignItems={"center"}
                  justifyContent={"center"}
                  height={"4rem"}
                  width={"4rem"}
                  marginRight={"1rem"}
                  onClick={() => setShowEmojiPicker(true)}
                >
                  <FaPlus color="green" />

                  {showEmojiPicker && (
                    <Box zIndex={3}>
                      <EmojiPicker
                        onEmojiClick={(emoji) => {
                          setSelectedIcon(emoji.emoji);
                          setShowEmojiPicker(false);
                        }}
                      />
                    </Box>
                  )}
                </ChakraUiButton>
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
                      type="submit"
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
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};

const CategorieModal = React.forwardRef(CategorieModalComponent);
export { CategorieModal };
