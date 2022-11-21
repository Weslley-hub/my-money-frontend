import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { themePallete } from "../../../global/styles/theme";

ChartJS.register(ArcElement, Tooltip, Legend);

type ExpenseCategory = {
  name: string;
  color: string;
};

const expenseCategories: ExpenseCategory[] = [
  {
    name: "Automóvel",
    color: themePallete.colors.pending[900]
  },
  {
    name: "Alguel",
    color: themePallete.colors.alert[900]
  },
  {
    name: "Alimentação",
    color: themePallete.colors.primary[900]
  },
  {
    name: "Lazer",
    color: themePallete.colors.secondary[900]
  }
];

const expenseCategoryColors = expenseCategories.map(
  (expenseCategory) => expenseCategory.color
);

const chartData: ChartData<"pie", Number[]> = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: expenseCategoryColors,
      borderWidth: 0
    }
  ]
};

const ExpensesPerCategortChart = () => {
  return (
    <Flex
      width="45%"
      alignItems={"center"}
      justifyContent="center"
      flexDirection={"column"}
    >
      <Heading
        marginBottom={"2rem"}
        fontWeight={"medium"}
        fontFamily={"Inter"}
        fontSize={"1.6rem"}
        color={"accentText.900"}
      >
        Gráfico de Gastos
      </Heading>
      <Box width="16rem" height="16rem">
        <Pie data={chartData} />
      </Box>
      <Flex
        borderRadius={"0.25rem"}
        background={"accent.900"}
        padding={"10px"}
        paddingY={"10px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"3rem"}
        width={"60%"}
      >
        <Grid templateColumns={"repeat(2, 1fr)"} width={"100%"}>
          {expenseCategories.map((expenseCategory) => {
            return (
              <Flex
                alignItems={"center"}
                paddingLeft={"2rem"}
                marginY={"0.5rem"}
                key={expenseCategory.name}
              >
                <Box
                  height={"1rem"}
                  width={"1rem"}
                  borderRadius={"0.5rem"}
                  background={expenseCategory.color}
                  marginRight={"0.5rem"}
                />
                <Text
                  fontFamily={"Inter"}
                  fontWeight={"regular"}
                  fontSize={"1.2rem"}
                  color={"accentText.900"}
                >
                  {expenseCategory.name}
                </Text>
              </Flex>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export { ExpensesPerCategortChart };
