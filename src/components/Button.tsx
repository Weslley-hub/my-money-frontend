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
      height={"3rem"}
      fontFamily={"Inter"}
      fontWeight="bold"
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
