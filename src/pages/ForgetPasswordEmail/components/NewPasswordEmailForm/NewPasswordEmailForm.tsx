import { Text, useToast, Button as ChackraUiButton } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

import { NewPasswordEmailFormData } from "../types/NewPasswordEmailForm";
import { initialNewPasswordEmailFormData } from "../utils/defaultNewPasswordEmailFormData";
import { showErrorToast, showSucessToast } from "../../../../services/ToastService";
import { NewPasswordEmailValidationSchema } from "./validation/NewPasswordEmailValidationSchema";

import { emailIcon } from "../../../../assets/images/icons";

import { AuthFormLayout, Button, FormInput } from "../../../../components";
import axios from "axios";
import api from "../../../../services/Api";

const NewPasswordEmailForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  function navigateToLoginPageEmail() {
    navigate({
      pathname: "/auth/login",
    });
  }

  function EnterPagNewPassword() {
    navigate({
      pathname: "/auth/forget-password",
    });
  }

  async function handleChangePassword(
    data: NewPasswordEmailFormData
  ) {
    type ApiErrorResponse = {
      response: any;
      data?:unknown
    }

    try {
      const response = await api.post("/auth/recovery-password/confirm-email",data.email);
      localStorage.setItem('token', response.data.token);
      api.defaults.headers = response.data.token
      showSucessToast(toast, "Email");
      EnterPagNewPassword();
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      showErrorToast(toast, apiError.response.data.message);
    }

    // const { setSubmitting } = formikHelpers;

    // setTimeout(() => {
    //   showSucessToast(toast, "Email enviado, verifique sua caixa de entrada");
    //   setSubmitting(false);
    // }, 300);
  }

  return (
    <AuthFormLayout
      formTitle="Recuperar a senha"
      hasGoBackButton
      onClickGoBackButton={navigateToLoginPageEmail}
    >
      <Formik<NewPasswordEmailFormData>
        initialValues={initialNewPasswordEmailFormData}
        validationSchema={NewPasswordEmailValidationSchema}
        onSubmit={async (formData, formikHelpers) => {
          await handleChangePassword(formData);
          formikHelpers.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="forget-password-step-form">
            <FormInput
              variant="WITH_ICON"
              type="email"
              name="email"
              placeholder="E-mail"
              width={"80%"}
              iconSource={emailIcon}
              mb="1.4rem"
              formikFieldConfig={{ name: "email" }}
            />

            <Button
                py={"1.2rem"}
                isLoading={isSubmitting}
                width={"50%"}
                mt="2rem"
                type="submit"
              >
              Enviar
              </Button>
          </Form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};

export { NewPasswordEmailForm };
