import { CreateToastFnReturn } from "@chakra-ui/react";

export function showSucessToast(toast: CreateToastFnReturn, message: string) {
  toast({
    status: "success",
    isClosable: true,
    description: message,
  });
 
}

export function showErrorToast(toast: CreateToastFnReturn, message: string) {
  toast({
    status: "error",
    isClosable: true,
    description: message,
  });
 
}