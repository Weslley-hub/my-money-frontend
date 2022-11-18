import { IconButton, Flex, Text } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { themePallete } from "../../../../../global/styles/theme";

const ExpensesMonthSelector = () => {
  return (
    <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"}>
      <IconButton
        aria-label="Mês anterior"
        background={"transparent"}
        padding={0}
        icon={
          <BiChevronLeft
            color={themePallete.colors.accentText[900]}
            size={"1.8rem"}
          />
        }
      />

      <Text
        fontSize={"1.1rem"}
        fontWeight={"medium"}
        fontFamily={"Inter"}
        color="accentText.900"
        margin={"0px"}
      >
        Março, 2022
      </Text>

      <IconButton
        aria-label="Mês Posterior"
        background={"transparent"}
        icon={
          <BiChevronRight
            color={themePallete.colors.accentText[900]}
            size={"1.8rem"}
          />
        }
      />
    </Flex>
  );
};

export { ExpensesMonthSelector };
