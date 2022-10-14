import { useToast } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";

import { AuthFormLayout, Button, PasswordInput } from "../../../../components";

import { NewPasswordFormData } from "./types/NewPasswordForm";

import { initialNewPasswordFormData } from "./utils/defaultNewPasswordFormData";
import { NewPasswordValidationSchema } from "./validation/NewPasswordSchema";

import { showSucessToast } from "../../../../services/ToastService";

const NewPasswordForm = () => {
  const toast = useToast();

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

  function goBack() {}

  return (
    <AuthFormLayout
      formTitle="Nova Senha"
      hasGoBackButton
      onClickGoBackButton={goBack}
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
              placeholder="Informe sua nova senha"
              name="password"
              width={"80%"}
              hasClickableIcon
              formikFieldConfig={{ name: "password" }}
            />

            <PasswordInput
              mb="1.4rem"
              placeholder="Confirme sua nova senha"
              name="passwordConfirmation"
              width={"80%"}
              hasClickableIcon
              formikFieldConfig={{ name: "passwordConfirmation" }}
            />

            <Button
              py={"1.2rem"}
              isLoading={isSubmitting}
              label="Confirmar"
              width={"80%"}
              mt="2rem"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </AuthFormLayout>
  );
};

export { NewPasswordForm };
