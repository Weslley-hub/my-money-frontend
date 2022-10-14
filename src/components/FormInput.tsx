import {
  FormControl,
  FormHelperText,
  Image,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";

export type FormInputProps = InputProps & {
  iconSource: string;
  hasClickableIcon?: boolean;
  onClickIcon?: () => void;
  formikFieldConfig: FieldHookConfig<string>;
};

export function FormInput(props: FormInputProps) {
  const [field, meta, helpers] = useField(props.formikFieldConfig);

  const {
    width,
    iconSource,
    hasClickableIcon,
    onClickIcon,
    mb,
    formikFieldConfig,
    ...rest
  } = props;

  return (
    <FormControl mb={mb} width={width} display={"flex"} flexDirection="column">
      <InputGroup>
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
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={field.value}
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

      {meta.touched && meta.error && (
        <FormHelperText color="red">{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
