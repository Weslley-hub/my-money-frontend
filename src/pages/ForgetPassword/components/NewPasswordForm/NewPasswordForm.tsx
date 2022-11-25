import { Text, useToast, Button as ChackraUiButton } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";

import { AuthFormLayout, Button, PasswordInput } from "../../../../components";

import { useNavigate } from "react-router-dom";

import { NewPasswordFormData } from "./types/NewPasswordForm";

import { initialNewPasswordFormData } from "./utils/defaultNewPasswordFormData";
import { NewPasswordValidationSchema } from "./validation/NewPasswordSchema";

import { showSucessToast } from "../../../../services/ToastService";

const NewPasswordForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  function navigateToEmailPagePassword() {
    navigate({
      pathname: "/auth/forget-password-email",
    });
  }

  function EnterLogin() {
    navigate({
      pathname: "/auth/login",
    });
  }


  function handleChangePassword(
    data: NewPasswordFormData,
    formikHelpers: FormikHelpers<NewPasswordFormData>
  ) {
    const { setSubmitting } = formikHelpers;

    setTimeout(() => {
      showSucessToast(toast, "Senha alterada com sucesso");
      setSubmitting(false);
    }, 300);
  }

  return (
    <AuthFormLayout
      formTitle="Nova Senha"
      hasGoBackButton
      onClickGoBackButton={navigateToEmailPagePassword}
    >
      <Formik<NewPasswordFormData>
        initialValues={initialNewPasswordFormData}
        validationSchema={NewPasswordValidationSchema}
        onSubmit={handleChangePassword}
      >
        {({ isSubmitting }) => (
          <Form className="forget-password-step-form">
            <PasswordInput
                mb="1.4rem"
                variant="WITH_ICON"
                placeholder="Informe sua nova senha"
                name="password"
                width={"80%"}
                formikFieldConfig={{ name: "password" }}
              />

              <PasswordInput
                mb="1.4rem"
                variant="WITH_ICON"
                placeholder="Confirme sua nova senha"
                name="password"
                width={"80%"}
                formikFieldConfig={{ name: "password" }}
              />

            <Button
              py={"1.2rem"}
              isLoading={isSubmitting}
              width={"50%"}
              mt="2rem"
              type="submit"
              onClick={EnterLogin}
            > 
            Confirmar
            </Button>
          </Form>
        )}
      </Formik> 
    </AuthFormLayout>
  );
};

export { NewPasswordForm };
