import { useToast } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";

import { NewPasswordEmailFormData } from "../types/NewPasswordEmailForm";
import { initialNewPasswordEmailFormData } from "../utils/defaultNewPasswordEmailFormData";
import { showSucessToast } from "../../../../services/ToastService";
import { NewPasswordEmailValidationSchema } from "./validation/NewPasswordEmailValidationSchema";

import { emailIcon } from "../../../../assets/images/icons";

import { AuthFormLayout, Button, FormInput } from "../../../../components";

const NewPasswordEmailForm = () => {
  const toast = useToast();

  function handleChangePassword(
    formikHelpers: FormikHelpers<NewPasswordEmailFormData>
  ) {
    const { setSubmitting } = formikHelpers;

    setTimeout(() => {
      showSucessToast(toast, "Email enviado, verifique sua caixa de entrada");
      setSubmitting(false);
    }, 300);
  }

  function goBack() {}

  return (
    <AuthFormLayout
      formTitle="Recuperar a senha"
      hasGoBackButton
      onClickGoBackButton={goBack}
    >
      <Formik<NewPasswordEmailFormData>
        initialValues={initialNewPasswordEmailFormData}
        validationSchema={NewPasswordEmailValidationSchema}
        onSubmit={handleChangePassword}
      >
        {({ isSubmitting }) => (
          <Form className="forget-password-step-form">
            <FormInput
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
              label="Enviar"
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

export { NewPasswordEmailForm };
