import { useState } from "react";

import { FormInput, FormInputProps } from "./FormInput";
import { invisibleEyeIcon, visibleEyeIcon } from "../assets/images/icons";

type PasswordInputProps = Omit<FormInputProps, "iconSource">;

const PasswordInput = (props: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <FormInput
      {...props}
      type={isPasswordVisible ? "text" : "password"}
      onClickIcon={togglePasswordVisibility}
      hasClickableIcon
      iconSource={isPasswordVisible ? invisibleEyeIcon : visibleEyeIcon}
    />
  );
};

export { PasswordInput };
