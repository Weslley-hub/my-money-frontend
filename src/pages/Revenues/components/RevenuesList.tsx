import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { RevenueFormData } from "../utils"

type RevenueFormData = {
  id: string;
  month: string;
  year: number;
  usedAmount: number;
  totalAmount: number;
}

const revenues: RevenueFormData[] = [
  {
    id: "1",
    month: "Agosto",
    year: 2022,
    totalAmount: 100,
    usedAmount: 10
  },
  {
    id: "2",
    month: "Setembro",
    year: 2022,
    totalAmount: 1000,
    usedAmount: 100
  },
  {
    id: "3",
    month: "Outubro",
    year: 2022,
    totalAmount: 500,
    usedAmount: 100
  }
]

type RevenueProps = {
  data: RevenueFormData;
}

export function RevenuesList(props: RevenueProps){
  return (
    <Flex flexDirection={"column"} justifyContent={"flex-start"} width={"80%"}>
      
      <Text>{props.data.month} de {props.data.year}</Text>
      <Box width={"100%"} marginBottom={"1rem"} height="120px" background={"gray.300"}>
        <Text color="white">Receita de {props.data.month} de {props.data.year}</Text>
        <Flex flexDirection={"column"} width={"100%"} justifyContent="center" alignItems="center" >
            {revenues.map((revenue) => (
              <RevenuesList data={revenue} />
            ))}
            </Flex>
      </Box>
    </Flex>
  );
}

