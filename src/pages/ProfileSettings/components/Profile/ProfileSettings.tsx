import { useState, useCallback } from "react";
import { Box, useToast, ButtonGroup } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
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

import { showErrorToast, showSucessToast } from "../../../../services/ToastService";

import { emailIcon, userIcon } from "../../../../assets/images/icons";
import { ProfileSettingsData } from "../../types";
import { initialProfileSettingsData } from "../../utils";
import { ProfileSettingsValidationSchema } from "../../validation";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/Api";
import { ApiErrorResponse } from "../../../../global/types/apiErrorResponse";

const ProfileSettingsConfig = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(initialAvatar);

  const onChangeSelectedAvatar = useCallback((avatar: Avatar) => {
    setSelectedAvatar(avatar);
  }, []);


  function navigateToLoginPagesSettings() {
    navigate({
      pathname: "/auth/login",
    });
  }

  async function handleDeleteUser(){
    try {
      //request.headers.authorization
      const token = localStorage.getItem("token");
      const config = {
        headers:{
          authorization: token
        }
      };
      const response = await api.delete("/users",config);
      showSucessToast(toast, "Usuario deletado com sucesso");
      navigateToLoginPagesSettings();
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      showErrorToast(toast, apiError.response.data.message);
    }
  }
  async function handleAlterProfile(
    _data: ProfileSettingsData
  ) {
    
    const requestData = {
      "email":_data.email,
      "password":_data.password,
      "name":_data.name,
      "avatar":selectedAvatar.id
    }
    console.log(requestData)
    try {
      //request.headers.authorization
      const token = localStorage.getItem("token");
      const config = {
        headers:{
          authorization: token
        }
      };
      console.log("token",token)
      const response = await api.put("/users", requestData, config);
      console.log(token);
      console.log(response);
      showSucessToast(toast, "Usuario atualizado com sucesso");
    } catch (error) {
      const apiError = error as ApiErrorResponse;
      showErrorToast(toast, apiError.response.data.message);
    }
  }

  function navigateToHomePagesSettings() {
    navigate({
      pathname: "/",
    });
  }

  return (
    <AuthFormLayout
      formTitle=""
      hasGoBackButton
      onClickGoBackButton={navigateToHomePagesSettings}
    >
      <AvatarSelector
        onChangeSelectedAvatar={onChangeSelectedAvatar}
        selectedAvatar={selectedAvatar}
      />

      <Box
        display={"center"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={{ "2xl": "3rem", lg: "2rem" }}
      >
        <Formik<ProfileSettingsData>
          initialValues={initialProfileSettingsData}
          validationSchema={ProfileSettingsValidationSchema}
          onSubmit={async (formData, formikHelpers) => {
            await handleAlterProfile(formData);
            formikHelpers.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form id="userProfileSettings" >
              <FormInput
                variant="WITH_ICON"
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
                variant="WITH_ICON"
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

              <ButtonGroup  width="70%" justifyContent="center">
              <Button
              py={"1.2rem"}
              isLoading={isSubmitting}
              width={"45%"}
              mt="2rem"
              alignItems="center"
              type="submit" >
                Salvar
              </Button>

              <Button
              onClick={handleDeleteUser}
              py={"1.2rem"}
              isLoading={isSubmitting}
              background="red"
              width={"45%"}
              mt="2rem"
              type="submit">
                Delete Perfil
              </Button>
            </ButtonGroup>
            </Form>
          )}
        </Formik>
      </Box>
    </AuthFormLayout>
  );
};

export { ProfileSettingsConfig }
