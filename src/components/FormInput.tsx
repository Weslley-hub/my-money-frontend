import {
  Image,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";

export type FormInputProps = InputProps & {
  iconSource: string;
  hasClickableIcon?: boolean;
  onClickIcon?: () => void;
};

export function FormInput(props: FormInputProps) {
  const { width, iconSource, hasClickableIcon, onClickIcon, mb, ...rest } =
    props;
  return (
    <InputGroup width={width} mb={mb} display={"flex"} alignItems={"center"}>
      <Input
        {...rest}
        fontFamily={"Inter"}
        fontWeight="regular"
        height={"3.2rem"}
        color="inputLabel.700"
        background={"inputBackground.900"}
        fontSize={"1rem"}
        _placeholder={{
          color: "#7A7A7A",
        }}
      />
      <InputRightElement
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
        cursor={hasClickableIcon ? "pointer" : "normal"}
        children={
          <Image
            src={iconSource}
            height={"1rem"}
            width={"1rem"}
            onClick={onClickIcon}
          />
        }
      />
    </InputGroup>
  );
}
