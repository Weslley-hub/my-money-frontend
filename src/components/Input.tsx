import { FormLabel, Input, InputProps, VStack } from "@chakra-ui/react";

type FormInputProps = InputProps & {
  label: string;
};

export function FormInput({ label, ...rest }: FormInputProps) {
  return (
    <VStack alignItems={"flex-start"} mb={rest.mb} justifyContent="center">
      <>
        <FormLabel
          color={"label.900"}
          fontFamily="Inter"
          fontSize={"1.2rem"}
          fontWeight={"normal"}
          mb={0}
        >
          {label}
        </FormLabel>
        <Input {...rest} height={"3.2rem"} background={"inputBackground.900"} />
      </>
    </VStack>
  );
}