import {
  Text,
  Box,
  useToast,
  Button as ChackraUiButton,
} from "@chakra-ui/react";
import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { emailIcon } from "../../../../assets/images/icons";

import { AuthFormLayout, PasswordInput } from "../../../../components";
import { Button } from "../../../../components/Button";
import { FormInput } from "../../../../components/FormInput";
import api from "../../../../services/Api";
import { showErrorToast, showSucessToast } from "../../../../services/ToastService";

import { LoginFormData } from "../../types";
import { initialLoginFormData } from "../../utils";
import { LoginValidationSchema } from "../../validation";

import "./LoginForm.styles.css";

export function LoginForm() {
  const navigate = useNavigate();
  const toast = useToast();

  async function handleLogin(formData: LoginFormData) {
    console.log("teste");

    type ApiErrorResponse = {
      response: any;
      data?:unknown
    }

    const URL_API = "http://127.0.0.1:3333/api/v1/auth";
    const RESOURCE = "/login";
    const COMPLET_URL = `${URL_API}${RESOURCE}`;
    
    const requestData = {
      "email":formData.email,
      "password":formData.password
    }
    console.log(requestData);

    try {
      const response = await api.post("/login", requestData);
      console.log(response.data);
      showSucessToast(toast,response.data.message);
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      showErrorToast(toast, apiError.response.data.message);
    }
    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("");
    //   }, 1000);
    // });
    showSucessToast(toast, "Login feito com sucesso");
  }


  function EnterPagHome() {
    navigate({
      pathname: "/",
    });
  }

  function navigateToHomePage() {
    console.log("teste");
    navigate({
      pathname: "/auth/register",
    });
  }

  function navigateToForgetPassword() {
    navigate({
      pathname: "/auth/forget-password-email",
    });
  }

  return (
    <AuthFormLayout formTitle="Login">
      <Formik<LoginFormData>
        initialValues={initialLoginFormData}
        validationSchema={LoginValidationSchema}
        onSubmit={async (formData)=>{console.log("APARECE DESGRAÇA"),await handleLogin(formData)}}
      >
        {({ isSubmitting }) => {
          return (
            <Form id="LoginForm">
              <FormInput
                variant="WITH_ICON"
                type="email"
                mb={"1rem"}
                placeholder="E-mail"
                formikFieldConfig={{ name: "email" }}
                iconSource={emailIcon}
                name="email"
                width={"80%"} />

              <PasswordInput
                variant="WITH_ICON"
                name="password"
                type="password"
                placeholder="Senha"
                formikFieldConfig={{ name: "password" }}
                width={"80%"} />

              <Box
                mt={"1rem"}
                alignItems={"center"}
                color={"inputLabel.900"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
                justifyContent={"flex-end"}
                width={"80%"}
                display={"flex"}
              >
                <ChackraUiButton
                  variant="link"
                  disabled={isSubmitting}
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={navigateToForgetPassword}
                >
                  <Text>Recuperar senha</Text>
                </ChackraUiButton>
              </Box>

                <Button
                py={"1.2rem"}
                isLoading={isSubmitting}
                width={"50%"}
                mt="2rem"
                type="submit"
                onClick={EnterPagHome}
              >Entrar
              </Button>

              <Box
                mt={"1rem"}
                alignItems={"center"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
              >
                <ChackraUiButton
                  variant="link"
                  disabled={isSubmitting}
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={navigateToHomePage}
                >
                  <Text>Criar conta</Text>
                </ChackraUiButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </AuthFormLayout>
  );
}
