import { Box, Flex } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import {
  Button,
} from "../../src/components";


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
    <Box height="100vh" width="20%" alignItems="center" borderWidth="thin" background="accent.900" >
          
            <Flex  alignItems="center" justifyContent="center">
             <Button
              color="white"
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={ProfileSettings}
              >
                Meu Perfil
              </Button>
              </Flex>

              <Flex  alignItems="center" justifyContent="center">
               <Button
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit"         
              onClick={MyCards}
              >
                Meus Cartões
              </Button>
              </Flex>

              <Flex alignItems="center" justifyContent="center">
               <Button
               background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={MyCategories}
              >
                Minhas Categórias
              </Button>
              </Flex>

              <Flex alignItems="center" justifyContent="center">
               <Button
               background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={MyRevenues}
              >
                Minhas Receitas
              </Button>
              </Flex>
              
          </Box>
  );
};

export { SideNavigationBar };
