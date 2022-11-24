import {
  FormControl,
  FormHelperText,
  SelectProps,
  Select
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";
import { SelectOption } from "../models";

export interface FormSelectProps extends SelectProps {
  options: SelectOption[];
  formikFieldConfig: FieldHookConfig<string>;
}

export function FormSelect({
  options,
  formikFieldConfig,
  ...rest
}: FormSelectProps) {
  const [field, meta, helpers] = useField(formikFieldConfig);
  const { width, mb } = rest;

  return (
    <FormControl mb={mb} width={width} display={"flex"} flexDirection="column">
      <Select
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
        name={formikFieldConfig.name}
        marginBottom={"0.5rem"}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      {meta.touched && meta.error && (
        <FormHelperText
          color="red"
          fontSize={{ "2xl": "0.9rem", lg: "0.8rem" }}
          marginTop={"0px"}
        >
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
}
