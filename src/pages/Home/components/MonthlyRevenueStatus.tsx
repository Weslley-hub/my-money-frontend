import { Box, Flex, Text } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";

import { themePallete } from "../../../global/styles/theme";
import { UpdateDeleteButtonGroup } from "./UpdateDeleteButtonGroup";

type MonthlyRevenueStatusProps = {
  width: string;
};

const MonthlyRevenueStatus = (props: MonthlyRevenueStatusProps) => {
  return (
    <Flex
      borderRadius={"0.25rem"}
      background={"accent.900"}
      padding={"10px"}
      paddingY={"10px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...props}
    >
      <Flex alignItems={"center"}>
        <Box marginLeft={"0.5rem"} marginRight={"0.4rem"}>
          <AiFillInfoCircle
            size={"1.2rem"}
            color={themePallete.colors.primary[900]}
          />
        </Box>

        <Box
          fontWeight={"medium"}
          color="accentText.900"
          display={"flex"}
          flexDirection={"row"}
          fontSize={"1rem"}
        >
          Gastos
          <Text marginX={"0.4rem"} color={"alert.900"}>
            R$ 350,00
          </Text>
          de
          <Text marginX={"0.4rem"} color={"primary.900"}>
            R$ 2000,00
          </Text>
          da receita atual
        </Box>
      </Flex>

      <UpdateDeleteButtonGroup />
    </Flex>
  );
};

export { MonthlyRevenueStatus };
