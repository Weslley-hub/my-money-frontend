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
          height={{ "2xl": "3.2rem", lg: "2.8rem" }}
          color="inputLabel.700"
          background={"inputBackground.900"}
          fontSize={{ "2xl": "1rem", lg: "0.9rem" }}
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
          fontSize={{ "2xl": "1rem", lg: "0.9rem" }}
          children={
            <Image
              src={iconSource}
              height={{ "2xl": "1rem", lg: "0.9rem" }}
              width={{ "2xl": "1rem", lg: "0.9rem" }}
              onClick={onClickIcon}
            />
          }
        />
      </InputGroup>

      {meta.touched && meta.error && (
        <FormHelperText
          color="red"
          fontSize={{ "2xl": "0.9rem", lg: "0.8rem" }}
        >
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}
