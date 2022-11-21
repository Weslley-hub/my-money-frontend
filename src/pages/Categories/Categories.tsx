import { Box, Flex } from "@chakra-ui/react";
import {
    ExpensesPerCategortChart,
    Header,
    MonthlyRevenueStatus,
    RegisterActionButtons,
} from "./components";
import { MonthlyExpenses } from "./components/MonthlyExpenses";

const Categories = () => {
  return (
    <Box width={"100%"} height={"100vh"}>
      <Header />
      <Box width={"100%"} paddingY={"1.2rem"} paddingX={"2rem"}>
        <Flex
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingY={"0px"}
        >
          <MonthlyRevenueStatus width="45%" />
          <RegisterActionButtons />
        </Flex>

        <Flex
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingY={"0px"}
          marginTop={"4rem"}
        >
          <MonthlyExpenses width="45%" />
          <ExpensesPerCategortChart />
        </Flex>
      </Box>
    </Box>
  );
};

export { Categories };
