import React, { ReactNode, useImperativeHandle } from "react";
import {
  useDisclosure,
  Modal as ChakraUiModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from "@chakra-ui/react";

export type ModalHandles = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  title: string;
  children?: ReactNode;
};

const ModalComponent: React.ForwardRefRenderFunction<
  ModalHandles,
  ModalProps
> = (props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openModal() {
    onOpen();
  }

  function closeModal() {
    onClose();
  }

  useImperativeHandle(ref, () => {
    return {
      close: closeModal,
      open: openModal
    };
  });

  return (
    <ChakraUiModal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent background={"accent.900"}>
        <ModalHeader
          background={"primary.900"}
          color={"white"}
          fontFamily={"Poppins"}
          fontWeight={"semibold"}
          fontSize={"1.1rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderTopLeftRadius={"6px"}
          borderTopRightRadius={"6px"}
          paddingY={"1.6rem"}
        >
          {props.title}
        </ModalHeader>
        <ModalCloseButton top={"0.7rem"} color={"white"} />

        <ModalBody paddingTop={"1.5rem"}>{props.children}</ModalBody>
      </ModalContent>
    </ChakraUiModal>
  );
};

const Modal = React.forwardRef(ModalComponent);
export { Modal };
