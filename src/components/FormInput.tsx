import {
  FormControl,
  FormHelperText,
  Image,
  Input,
  InputGroup,
  InputProps,
  InputRightElement
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";

export interface CommonFormInputProps extends InputProps {
  formikFieldConfig: FieldHookConfig<string>;
  variant: "WITH_ICON" | "WITHOUT_ICON";
}

export interface FormInputWithIconProps extends CommonFormInputProps {
  variant: "WITH_ICON";
  iconSource: string;
  hasClickableIcon?: boolean;
  onClickIcon?: () => void;
}

export interface FormInputWithoutIconProps extends CommonFormInputProps {
  variant: "WITHOUT_ICON";
}

export type FormInputProps = FormInputWithIconProps | FormInputWithoutIconProps;

export function FormInput({
  formikFieldConfig,
  width,
  mb,
  ...rest
}: FormInputProps) {
  const [field, meta, helpers] = useField(formikFieldConfig);

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
            color: "#7A7A7A"
          }}
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={field.value}
          marginBottom={"0.5rem"}
        />

        {rest.variant === "WITH_ICON" && (
          <InputRightElement
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            cursor={rest.hasClickableIcon ? "pointer" : "normal"}
            fontSize={{ "2xl": "1rem", lg: "0.9rem" }}
            children={
              <Image
                src={rest.iconSource}
                height={{ "2xl": "1rem", lg: "0.9rem" }}
                width={{ "2xl": "1rem", lg: "0.9rem" }}
                onClick={rest.onClickIcon}
              />
            }
          />
        )}
      </InputGroup>

      {meta.touched && meta.error && (
        <FormHelperText
          color="red"
          marginTop={"0px"}
          fontSize={{ "2xl": "0.9rem", lg: "0.8rem" }}
        >
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}
