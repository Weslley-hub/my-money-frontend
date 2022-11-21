import { Flex, SpaceProps, Text } from "@chakra-ui/react";
import { FormSelect, FormSelectProps } from "./FormSelect";

type OwnProps = {
  label: string;
};

type FormSelectWithLabelProps = FormSelectProps & SpaceProps & OwnProps;

const FormSelectWithLabel = (props: FormSelectWithLabelProps) => {
  const { marginTop, marginBottom, width, label, ...rest } = props;

  return (
    <Flex
      direction={"column"}
      marginTop={marginTop}
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
      <FormSelect {...rest} width={"100%"} />
    </Flex>
  );
};

export { FormSelectWithLabel };
