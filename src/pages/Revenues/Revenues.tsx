import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../components";
import { SideNavigationBar } from "../../components/SideNavigationBar";

type Revenue = {
  id: string;
  month: string;
  year: number;
  usedAmount: number;
  totalAmount: number;
}

const revenues: Revenue[] = [
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
  data: Revenue;
}

export function Revenue(props: RevenueProps){
  return (
    <Flex flexDirection={"column"} justifyContent={"flex-start"} width={"80%"}>
      <Text>{props.data.month} de {props.data.year}</Text>
      <Box width={"100%"} marginBottom={"1rem"} height="120px" background={"gray.300"}>
        <Text>Receita de {props.data.month} de {props.data.year}</Text>
      </Box>
    </Flex>
  );
}

export function Revenues(){

  return (
    <Box width={"100%"}>
      <Header />

      <Flex width={"100%"} >
        <SideNavigationBar />

        <Flex flexDirection={"column"} width={"100%"} justifyContent="center" alignItems="center" >
            {revenues.map((revenue) => (
              <Revenue data={revenue} />
            ))}
        </Flex>
      </Flex>
    </Box>
  );

}