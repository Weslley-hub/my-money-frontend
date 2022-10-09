import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { AvatarSelector } from "../../../components/AvatarSelector";
import { FormInput } from "../../../components/FormInput";
import { Button } from "../../../components/Button";
import { AuthFormLayout } from "../../../components/AuthFormLayout";
import { PasswordInput } from "../../../components/PasswordInput";

import { userIcon, emailIcon } from "../../../assets/images/icons/textfieds";
import { useState } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function navigateToLoginPage() {
    navigate({
      pathname: "/auth/login",
    });
  }

  function handleSubmit() {
    setIsLoading(true);
  }

  return (
    <AuthFormLayout
      formTitle="Criar Conta"
      hasGoBackButton
      onClickGoBackButton={navigateToLoginPage}
    >
      <AvatarSelector />

      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={"3rem"}
      >
        <FormInput
          placeholder="Nome Completo"
          width={"80%"}
          iconSource={userIcon}
          mb="1.4rem"
        />

        <FormInput
          type="email"
          placeholder="E-mail"
          width={"80%"}
          iconSource={emailIcon}
          mb="1.4rem"
        />

        <PasswordInput
          mb="1.4rem"
          placeholder="Senha"
          width={"80%"}
          hasClickableIcon
        />

        <Button
          py={"1.2rem"}
          isLoading={isLoading}
          label="Criar Conta"
          width={"80%"}
          mt="2rem"
          onClick={handleSubmit}
        />
      </Box>
    </AuthFormLayout>
  );
};

export { RegisterForm };
