import {
  Text,
  Box,
  useToast,
  Button as ChackraUiButton,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { emailIcon } from "../../../../assets/images/icons/textfieds";

import { AuthFormLayout, PasswordInput } from "../../../../components";
import { Button } from "../../../../components/Button";
import { FormInput } from "../../../../components/FormInput";
import { showSucessToast } from "../../../../services/ToastService";

import { LoginFormData } from "../../types";
import { initialLoginFormData } from "../../utils";
import { LoginValidationSchema } from "../../validation";

import "./LoginForm.styles.css";

export function LoginForm() {
  const navigate = useNavigate();
  const toast = useToast();

  async function handleLogin(formData: LoginFormData) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("");
      }, 1000);
    });
    showSucessToast(toast, "Login feito com sucesso");
  }

  function navigateToLoginPage() {
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
        onSubmit={async (formData, formikHelpers) => {
          await handleLogin(formData);
          formikHelpers.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form id="LoginForm">
              <FormInput
                type="email"
                mb={"1rem"}
                placeholder="E-mail"
                formikFieldConfig={{ name: "email" }}
                iconSource={emailIcon}
                name="email"
                width={"80%"}
              />

              <PasswordInput
                name="password"
                type="password"
                placeholder="Senha"
                formikFieldConfig={{ name: "password" }}
                width={"80%"}
              />

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
                label="Entrar"
                width={"80%"}
                background="primary.900"
                _active={{ opacity: 0.1 }}
                _hover={{ background: "primary.900" }}
                mt={"2rem"}
                type="submit"
                isLoading={isSubmitting}
              />

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
                  onClick={navigateToLoginPage}
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
