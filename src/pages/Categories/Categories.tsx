import { Box, Flex } from "@chakra-ui/react";
import { SideNavigationBar } from "../../components/SideNavigationBar";
import { Header } from "../../global";
import {
        CategorieList,
        RegisterActionButtons
} from "./components";

import { CategorieProvider } from "./contexts/Categorie.context";

const Categories = () => {
  return (
    <CategorieProvider>
      <Box>
        <Header />
        <Flex width="100%" height="100vh">
        <SideNavigationBar/>
          <Flex
            width={"75%"}
            height="80vh"
            alignItems="center"
            justifyContent="center"
          >
          <CategorieList width="60%" />
          </Flex>
          <Flex
            width="20%"
            height="15vh"
            alignItems="center"
            justifyContent="center"
          >
            <RegisterActionButtons />
          </Flex>
        </Flex>
      </Box>
    </CategorieProvider>
  );
};

export { Categories };
