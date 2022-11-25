import { Text,
         Box,  
         Button as ChackraUiButton, } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


const SideNavigationBar  = () => {
  const navigate = useNavigate();

  function ProfileSettings() {
           navigate({
           pathname: "/auth/profile-settings",

    });
  }

  function MyCategories() {
            navigate({
            pathname: "/auth/categories",
    });
  }

  function MyCards() {
            navigate({
            pathname: "/",
    });
  }

  function MyRevenues() {
            navigate({
            pathname: "/",
    });
  }

  return (
    <Box height="100vh" width="30%" background="white">
             <Box 
                background="primary.900"
                mt={"1rem"}
                alignItems={"center"}
                color={"inputLabel.900"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
                justifyContent={"center"}
                width={"80%"}
                display={"center"}
              >
                <ChackraUiButton
                  variant="link"
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={ProfileSettings}
                >
                  <Text>Meu Perfil</Text>
                </ChackraUiButton>
              </Box>

               <Box
                background="primary.900"
                mt={"1.5rem"}
                alignItems={"center"}
                color={"white"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
                justifyContent={"center"}
                width={"80%"}
                display={"flex"}
              >
                <ChackraUiButton
                  variant="link"
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={MyCards}
                >
                  <Text>Meus Cartões</Text>
                </ChackraUiButton>
              </Box>

               <Box
                background="primary.900"
                mt={"1.5rem"}
                alignItems={"center"}
                color={"black"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
                justifyContent={"center"}
                width={"80%"}
                display={"flex"}
              >
                <ChackraUiButton
                  variant="link"
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={MyCategories}
                >
                  <Text>Minhas Categórias</Text>
                </ChackraUiButton>
              </Box>

               <Box
                background="primary.900"
                mt={"1.5rem"}
                alignItems={"center"}
                color={"externalInputLabel.900"}
                fontFamily={"Poppins"}
                fontWeight="Bold"
                justifyContent={"center"}
                width={"50%"}
                display={"center"}
              >
                <ChackraUiButton
                  variant="link"
                  color={"inputLabel.900"}
                  _hover={{
                    textDecoration: "none",
                  }}
                  onClick={MyRevenues}
                >
                  <Text>Minhas Receitas</Text>
                </ChackraUiButton>
              </Box>
    </Box>
  );
};

export { SideNavigationBar };
