import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";

import { themePallete } from "../../../../../global/styles/theme";
import { ExpenseModel } from "../../../../../models";
import { useExpenses } from "../../../contexts/Expenses.context";
import { UpdateDeleteButtonGroup } from "../../UpdateDeleteButtonGroup";

type ExpenseCardProps = {
  data: ExpenseModel;
};

const ExpenseCard = ({ data: expense }: ExpenseCardProps) => {
  const { removeExpense, openExpenseModal } = useExpenses();

  function handleRemoveExpense() {
    removeExpense(expense.id);
  }

  function handleUpdateExpense() {
    openExpenseModal(expense);
  }

  return (
    <Flex
      height={"9rem"}
      width={"100%"}
      marginBottom={"2rem"}
      background={"accent.900"}
      borderRadius="4px"
      alignItems={"center"}
    >
      <Box
        height={"100%"}
        width={"0.5rem"}
        backgroundColor={"pending.700"}
        borderRadius={"4px"}
      />
      <Flex
        justifyContent={"center"}
        width={"100%"}
        paddingX={"1rem"}
        flexDirection={"column"}
      >
        <Flex alignItems={"center"}>
          <AiFillInfoCircle
            size={"1.2rem"}
            color={themePallete.colors.pending[900]}
          />

          <Text
            marginLeft={"0.3rem"}
            fontSize={"1rem"}
            fontFamily={"Inter"}
            fontWeight={"semibold"}
            color={"pending.900"}
          >
            Pagamento pendente
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Text
              color={themePallete.colors.primary[900]}
              fontSize={"3rem"}
              mb={"0.2rem"}
            >
              {expense.icon}
            </Text>

            <Box marginLeft={"0.6rem"}>
              <Heading color={"strongText.900"} fontSize={"1.5rem"}>
                {expense.description}
              </Heading>

              <Text
                color={"weekText.900"}
                fontFamily={"Inter"}
                fontWeight={"medium"}
                fontSize={"0.9rem"}
                textAlign={"left"}
                marginTop={"0.05rem"}
              >
                Segunda-feira, dia 24
              </Text>
            </Box>
          </Flex>

          <Flex
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <UpdateDeleteButtonGroup
              onClickDeleteExpenseButton={handleRemoveExpense}
              onClickUpdateExpenseButton={handleUpdateExpense}
            />

            <Flex
              alignItems={"flex-end"}
              marginTop={"0.5rem"}
              marginBottom={"0.05rem"}
            >
              <Text
                fontWeight={"semibold"}
                fontFamily={"Inter"}
                color={"strongText.500"}
                fontSize="1.5rem"
                marginBottom={0}
              >
                R$ {expense.totalAmount}
              </Text>
              <Text
                marginLeft={"0.2rem"}
                fontWeight={"semibold"}
                fontFamily={"Inter"}
                color={"strongText.500"}
                fontSize="0.8rem"
                lineHeight={"32px"}
              >
                (Débito)
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { ExpenseCard };
