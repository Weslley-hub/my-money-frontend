import { Box, Text } from "@chakra-ui/react";
import { Expense, ExpensesMonthSelector } from "./components";

type MonthlyExpensesProps = {
  width: string;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MonthlyExpenses = ({ width }: MonthlyExpensesProps) => {
  return (
    <Box width={width}>
      <ExpensesMonthSelector />

      <Box
        maxHeight={"60vh"}
        overflowY={"scroll"}
        marginTop={"2rem"}
      >
        {arr.map((value) => (
          <Expense key={value} />
        ))}
      </Box>

      <Text marginTop={"2rem"} textAlign={"center"} color={"accentText.900"}>
        Role a lista para ver mais items
      </Text>
    </Box>
  );
};

export { MonthlyExpenses };
