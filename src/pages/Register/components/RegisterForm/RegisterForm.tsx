import { useState, useCallback } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";

import "./RegisterForm.styles.css";

import {
  initialAvatar,
  AuthFormLayout,
  AvatarSelector,
  FormInput,
  PasswordInput,
  Avatar,
  Button,
} from "../../../../components";

import { UserValidationSchema } from "../../validation/UserSchema";
import { RegisterFormData } from "../../types/RegisterForm";

import { initialRegisterFormData } from "../../utils/defaultRegisterFormData";
import { showSucessToast } from "../../../../services/ToastService";

import { emailIcon, userIcon } from "../../../../assets/images/icons";

const RegisterForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(initialAvatar);

  const onChangeSelectedAvatar = useCallback((avatar: Avatar) => {
    setSelectedAvatar(avatar);
  }, []);

  function navigateToLoginPage() {
    navigate({
      pathname: "/auth/login",
    });
  }

  function handleCreateAccount(
    data: RegisterFormData,
    formikHelpers: FormikHelpers<RegisterFormData>
  ) {
    const { setSubmitting } = formikHelpers;

    setTimeout(() => {
      showSucessToast(toast, "Usuário cadastrado com sucesso");
      setSubmitting(false);
    }, 300);
  }

  return (
    <AuthFormLayout
      formTitle="Criar Conta"
      hasGoBackButton
      onClickGoBackButton={navigateToLoginPage}
    >
      <AvatarSelector
        onChangeSelectedAvatar={onChangeSelectedAvatar}
        selectedAvatar={selectedAvatar}
      />

      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={{ "2xl": "3rem", lg: "2rem" }}
      >
        <Formik<RegisterFormData>
          initialValues={initialRegisterFormData}
          validationSchema={UserValidationSchema}
          onSubmit={handleCreateAccount}
        >
          {({ isSubmitting }) => (
            <Form id="userRegisterForm">
              <FormInput
                placeholder="Nome Completo"
                width={"80%"}
                iconSource={userIcon}
                mb="1.4rem"
                type="text"
                name="name"
                textTransform={"capitalize"}
                formikFieldConfig={{ name: "name" }}
              />

              <FormInput
                type="email"
                name="email"
                placeholder="E-mail"
                width={"80%"}
                iconSource={emailIcon}
                mb="1.4rem"
                formikFieldConfig={{ name: "email" }}
              />

              <PasswordInput
                mb="1.4rem"
                placeholder="Senha"
                name="password"
                width={"80%"}
                hasClickableIcon
                formikFieldConfig={{ name: "password" }}
              />

              <Button
                py={"1.2rem"}
                isLoading={isSubmitting}
                label="Criar Conta"
                width={"80%"}
                mt="2rem"
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </Box>
    </AuthFormLayout>
  );
};

export { RegisterForm };
