import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../components";
import { SideNavigationBar } from "../../components/SideNavigationBar";
import { FaUserAlt } from "react-icons/fa"

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

export function Revenue(props: RevenueProps){
  return(
    <Box>
      <Text>{props.data.month} de {props.data.year}</Text>
      <Box width={"100%"} marginBottom={"1rem"} paddingY={"1rem"} paddingX={"1rem"} background="accent.900">
      <Text color="black"> Receita de {props.data.month} de {props.data.year} </Text>
      <Text> Gastos R$ {props.data.usedAmount} do valor total </Text>
      <Flex 
            
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            >
      <Text> valor total da receita  </Text>
      <Text color="green"> {props.data.totalAmount} </Text>
      </Flex>
      </Box> 
    </Box>
  )
}

export function Revenues(){
  return (
   <Box width="100%" height="100vh" >
        <Header />
        <Flex width="100%" height="100vh">
        <SideNavigationBar/>
          <Flex
            width="100%"
            height="70vh"
            alignItems="center"
            justifyContent="center"
          >
          <Box
            width="70%"
            height={"100vh"}
            maxHeight={"50vh"}
            marginTop={"2rem"}
            overflowY={"scroll"}>
              { revenues.map((revenue)=>(
                 <Revenue data={revenue}/>))
              }
             </Box >
          </Flex>
        </Flex>
      </Box>

  );
}