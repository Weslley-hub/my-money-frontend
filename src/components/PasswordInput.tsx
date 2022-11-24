import { useState } from "react";

import { FormInput, CommonFormInputProps } from "./FormInput";
import { invisibleEyeIcon, visibleEyeIcon } from "../assets/images/icons";

const PasswordInput = (props: CommonFormInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <FormInput
      {...props}
      variant="WITH_ICON"
      type={isPasswordVisible ? "text" : "password"}
      onClickIcon={togglePasswordVisibility}
      hasClickableIcon
      iconSource={isPasswordVisible ? invisibleEyeIcon : visibleEyeIcon}
    />
  );
};

export { PasswordInput };
