import { useState, useCallback } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";

import "./ProfileSettins.styles.css";

import {
  initialAvatar,
  AuthFormLayout,
  AvatarSelector,
  FormInput,
  PasswordInput,
  Avatar,
  Button,
} from "../../../../components";


import { showSucessToast } from "../../../../services/ToastService";

import { emailIcon, userIcon } from "../../../../assets/images/icons";
import { ProfileSettingsData } from "../../types";
import { initialProfileSettingsData } from "../../utils";
import { ProfileSettingsValidationSchema } from "../../validation";



const ProfileSettingsConfig = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(initialAvatar);

  const onChangeSelectedAvatar = useCallback((avatar: Avatar) => {
    setSelectedAvatar(avatar);
  }, []);

  function navigateToButtonProfileSettings() {
    navigate({
      pathname: "/auth/login",
    });
  }

  function handleAlterProfile(
    data: ProfileSettingsData,
    formikHelpers: FormikHelpers<ProfileSettingsData>
  ) {
    const { setSubmitting } = formikHelpers;

    setTimeout(() => {
      showSucessToast(toast, "Usuário cadastrado com sucesso");
      setSubmitting(false);
    }, 300);
  }

  return (
    <AuthFormLayout
      formTitle=""
      hasGoBackButton
    >
      <AvatarSelector
        onChangeSelectedAvatar={onChangeSelectedAvatar}
        selectedAvatar={selectedAvatar}
      />

      <Box
        display={"flex"}
        width={"80%"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={{ "2xl": "3rem", lg: "2rem" }}
      >
        <Formik<ProfileSettingsData>
          initialValues={initialProfileSettingsData}
          validationSchema={ProfileSettingsValidationSchema}
          onSubmit={handleAlterProfile}
        >
          {({ isSubmitting }) => (
            <Form id="userProfileSettings">
              <FormInput
                placeholder="Nome Completo"
                width={"70%"}
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
                width={"70%"}
                iconSource={emailIcon}
                mb="1.4rem"
                formikFieldConfig={{ name: "email" }}
              />

              <PasswordInput
                mb="1.4rem"
                placeholder="Senha"
                name="password"
                width={"70%"}
                hasClickableIcon
                formikFieldConfig={{ name: "password" }}
              />

              <Button
              py={"1.2rem"}
              isLoading={isSubmitting}
              label="Salvar"
              width={"30%"}
              mt="2rem"
              alignItems="flex"
              type="submit" children={undefined}/>

            <Button
              py={"1.2rem"}
              isLoading={isSubmitting}
              background="red"
              label="Delete Perfil"
              width={"30%"}
              mt="2rem"
              type="submit" children={undefined}/>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthFormLayout>
  );
};

export { ProfileSettingsConfig }