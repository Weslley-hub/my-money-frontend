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
import { showErrorToast, showSucessToast } from "../../../../services/ToastService";

import { emailIcon, userIcon } from "../../../../assets/images/icons";
import axios from "axios";
import api from "../../../../services/Api";

const RegisterForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(initialAvatar);

  const onChangeSelectedAvatar = useCallback((avatar: Avatar) => {
    setSelectedAvatar(avatar);
  }, []);

  function navigateToHomePage() {
    navigate({
      pathname: "/",
    });
  }

  type ApiErrorResponse = {
    response: any;
    data?:unknown
  }
  async function handleCreateAccount(
    data: RegisterFormData,
    formikHelpers: FormikHelpers<RegisterFormData>
  ) {
    const { setSubmitting } = formikHelpers;
    
    const requestData = {
      "name":data.name,
      "email":data.email,
      "password":data.password,
      "avatar":selectedAvatar.id
    }

    console.log(requestData);
    try {
      const response = await api.post("/register",requestData);
      showSucessToast(toast,response.data.message);
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      showErrorToast(toast, apiError.response.data.message);
    }
    
    
    
    
    
    // setTimeout(() => {
    //   showSucessToast(toast, "Usuário cadastrado com sucesso");
    //   setSubmitting(false);
    // }, 300);
  }

  function navigateToLoginPage() {
    navigate({
      pathname: "/auth/login",
    });
  }
  return(
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
                variant="WITH_ICON"
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
                variant="WITH_ICON"
                name="email"
                placeholder="E-mail"
                width={"80%"}
                iconSource={emailIcon}
                mb="1.4rem"
                formikFieldConfig={{ name: "email" }}
              />

              <PasswordInput
                mb="1.4rem"
                variant="WITH_ICON"
                placeholder="Senha"
                name="password"
                width={"80%"}
                formikFieldConfig={{ name: "password" }}
              />

              <Button
                py={"1.2rem"}
                isLoading={isSubmitting}
                onClick={navigateToLoginPage}
                width={"80%"}
                mt="2rem"
                type="submit"
              >
              Criar Conta
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthFormLayout>
  );
};

export { RegisterForm };
