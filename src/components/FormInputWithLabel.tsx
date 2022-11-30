import { Flex, SpaceProps, Text } from "@chakra-ui/react";
import { FormInput, FormInputProps } from "./FormInput";

type OwnProps = {
  label: string;
};

type FormInputWithLabelProps = FormInputProps & SpaceProps & OwnProps;

const FormInputWithLabel = (props: FormInputWithLabelProps) => {
  const { marginTop, marginLeft, marginBottom, label, width, ...rest } = props;

  return (
    <Flex
      direction={"column"}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      width={width}
    >
      <Text
        fontWeight={"semibold"}
        color={"externalInputLabel.900"}
        fontFamily={"Inter"}
        marginBottom="0.5rem"
        fontSize={"1rem"}
      >
        {label}
      </Text>
      <FormInput width={"100%"} {...rest} />
    </Flex>
  );
};

export { FormInputWithLabel };
