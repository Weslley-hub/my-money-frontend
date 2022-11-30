import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { SideNavigationBar } from "../../components/SideNavigationBar";
import { Header } from "../../global";
import {
  CardListing,
  RegisterActionButtons
} from "./components";
import { CardProvider } from "./contexts/Categorie.context";



const CardScreen = () => {
  return (
    <CardProvider>
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
          <CardListing width="90%" />
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
    </CardProvider>
  );
};

export { CardScreen };
