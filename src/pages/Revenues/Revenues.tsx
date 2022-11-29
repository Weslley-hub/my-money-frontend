import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components";
import { SideNavigationBar } from "../../components/SideNavigationBar";
import { RevenuesList } from "./components"

export function Revenues(){

  return (
    <Box width={"100%"}>
      <Header />
      <Flex width={"100%"} >
        <SideNavigationBar />
        <Revenues />
      </Flex>
    </Box>
  );
}