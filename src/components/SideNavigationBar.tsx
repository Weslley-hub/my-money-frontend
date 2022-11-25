import { Box } from "@chakra-ui/react";

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
    <Box height="100vh" width="20%" background="white">

             <Button
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              type="submit" 
              onClick={ProfileSettings}
              >
                Meu Perfil
              </Button>

               <Button
               background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              type="submit"         
              onClick={MyCards}
              >
                Meus Cartões
              </Button>

               <Button
               background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              type="submit" 
              onClick={MyCategories}
              >
                Minhas Categórias
              </Button>

               <Button
               background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              type="submit" 
              onClick={MyRevenues}
              >
                Minhas Receitas
              </Button>
          </Box>
  );
};

export { SideNavigationBar };
