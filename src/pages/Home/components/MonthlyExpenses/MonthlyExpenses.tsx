import { Box, Text } from "@chakra-ui/react";

import { useExpenses } from "../../contexts/Expenses.context";
import { ExpenseCard, ExpensesMonthSelector } from "./components";

type MonthlyExpensesProps = {
  width: string;
};

export type ExpenseModel = {
  description: string;
  icon: string;
  id: string;
};

const MonthlyExpenses = ({ width }: MonthlyExpensesProps) => {
  const { expenses } = useExpenses();

  return (
    <>
      <Box width={width}>
        <ExpensesMonthSelector />

        <Box
          height={"50vh"}
          maxHeight={"50vh"}
          overflowY={"scroll"}
          marginTop={"2rem"}
        >
          {expenses.map((expense) => (
            <ExpenseCard key={expense.id} data={expense} />
          ))}
        </Box>

        <Text marginTop={"2rem"} textAlign={"center"} color={"accentText.900"}>
          Role a lista para ver mais items
        </Text>
      </Box>
    </>
  );
};

export { MonthlyExpenses };
