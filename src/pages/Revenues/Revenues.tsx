import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../components";
import { SideNavigationBar } from "../../components/SideNavigationBar";

// import { RevenuesForm } from "./components/RevenuesForm"
// import { RevenueFormData } from "./utils";


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
     month: "Janeiro",
     year: 2022,
     totalAmount: 1200,
     usedAmount: 800
   },
   {
     id: "2",
     month: "Fevereiro",
     year: 2022,
     totalAmount: 1200,
     usedAmount: 780
   },

   {
     id: "3",
     month: "Março",
     year: 2022,
     totalAmount: 1200,
     usedAmount: 500
   }
 ]

 type RevenueProps = {
   data: Revenue;
 }
 
export function Revenues(props:RevenueProps){
  return (

    <Flex flexDirection={"column"} justifyContent={"center"} width={"100%"} background="black" > 

      <Header/>

      <SideNavigationBar />

      <Text>{props.data.month} de {props.data.year}</Text>

      <Box width={"100%"} marginBottom={"1rem"} height="120px" background={"red"}>

        <Text color="black"> Receita de {props.data.month} de {props.data.year} </Text>

        <Flex flexDirection={"column"} width={"100%"} justifyContent="center" alignItems="center" >
          <Box>
            {revenues.map((revenue) => (
              <Revenues data={revenue} />
            ))}
            </Box>
        </Flex>
      </Box>
 </Flex>

  );
}