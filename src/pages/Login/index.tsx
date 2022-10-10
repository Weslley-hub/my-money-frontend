import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

import logoImg from "../../assets/images/logo-vertical.svg";
import { LoginForm } from "./components/LoginForm";

export function Login() {
    return (
      <Box h="100vh" w="100%">
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem h="100vh" w="100%" bg="primary.900">
            <Flex h="100vh" w="100%" justifyContent={"center"} alignItems="center"> 
            <Image src={logoImg} height="10rem" alt="Logo MyMoney" />
            </Flex>
          </GridItem>
          <GridItem w="100%" h="100vh" bg="inputBackground.50">
            <Flex h="100vh" w="100%" justifyContent={"center"} alignItems="center">
              <LoginForm/>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    );
  }