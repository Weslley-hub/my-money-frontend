import {
  Button as ChackraUiButton,
  ButtonProps as ChackraUiButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChackraUiButtonProps & {
  label: string;
};

export function Button({ label, isLoading, ...rest }: ButtonProps) {
  return (
    <ChackraUiButton
      height={{ "2xl": "3.2rem", lg: "2.8rem" }}
      paddingY={"1.8rem"}
      fontFamily={"Poppins"}
      fontWeight="SemiBold"
      fontSize={"1rem"}
      colorScheme="teal"
      borderRadius={"6px"}
      backgroundColor="primary.900"
      isLoading={isLoading}
      {...rest}
    >
      {label}
    </ChackraUiButton>
  );
}
