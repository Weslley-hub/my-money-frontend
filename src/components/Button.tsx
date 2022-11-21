import { ReactNode } from "react";
import {
  Button as ChackraUiButton,
  ButtonProps as ChackraUiButtonProps
} from "@chakra-ui/react";

type ButtonProps = ChackraUiButtonProps & {
  children: ReactNode;
};

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ChackraUiButton
      fontFamily={"Poppins"}
      fontWeight="SemiBold"
      fontSize={"0.9rem"}
      colorScheme="teal"
      borderRadius={"6px"}
      height={0}
      alignItems={"center"}
      justifyContent={"center"}
      _hover={{
        opacity: 0.7
      }}
      {...rest}
    >
      {children}
    </ChackraUiButton>
  );
}
