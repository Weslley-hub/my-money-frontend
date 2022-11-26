import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../global";
import { themePallete } from "../../global/styles/theme";
import {

  CategorieList,
  RegisterActionButtons
} from "./components";
import { CategorieProvider } from "./contexts/Categorie.context";

const Categories = () => {
  return (
    <CategorieProvider>
      <Box width={"100%"} height={"100vh"}>
        <Header />
        <Box width={"100%"} paddingY={"1.2rem"} paddingX={"2rem"}>
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingY={"0px"}
            
          >
            <Box fontSize={"1.8rem"} fontFamily = {"inter"} color={themePallete.colors.accentText[900]}
            paddingX = {"300px"}>
              Minhas Categorias</Box>
            <RegisterActionButtons />
          </Flex>

          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            paddingY={"0px"}
            paddingX={"100px"}
            marginTop={"4rem"}
          >
            <CategorieList width="75%" />
            
          </Flex>
        </Box>
      </Box>
    </CategorieProvider>
  );
};

export { Categories };
