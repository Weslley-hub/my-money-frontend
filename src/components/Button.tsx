import {
  Button as ChackraUiButton,
  ButtonProps as ChackraUiButtonProps,
} from "@chakra-ui/react";

type ButtonProps = ChackraUiButtonProps & {
  label: string;
};

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <ChackraUiButton
      height={"3rem"}
      paddingY={"1.8rem"}
      fontFamily={"Inter"}
      fontWeight="bold"
      fontSize={"1rem"}
      colorScheme="teal"
      borderRadius={"6px"}
      {...rest}
    >
      {label}
    </ChackraUiButton>
  );
}
