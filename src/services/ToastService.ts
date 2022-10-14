import { CreateToastFnReturn } from "@chakra-ui/react";

export function showSucessToast(toast: CreateToastFnReturn, message: string) {
  toast({
    status: "success",
    isClosable: true,
    description: message,
  });
}
