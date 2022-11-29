import { Box, Flex, Text} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa"
import { BsFillCreditCardFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import { MdAttachMoney } from "react-icons/md"

import { useNavigate } from "react-router-dom";

import {
  Button,
} from "../../src/components";


const SideNavigationBar  = () => {
  const navigate = useNavigate();

  function ProfileSettings() {
           navigate({
           pathname: "/auth/profile-settings",
    });
  }

  function MyCategories() {
            navigate({
            pathname: "/auth/categories",
    });
  }

  function MyCards() {
            navigate({
            pathname: "/",
    });
  }

  function MyRevenues() {
            navigate({
            pathname: "/",
    });
  }

  return (
    <Box height="100vh" width="25%" alignItems="center" borderWidth="thin" background="accent.900" >
          
            <Flex  alignItems="center" justifyContent="center">
             <Button
              color="white"
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py={"1.2rem"}
              width={"80%"}
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={ProfileSettings}
              >
                <Box marginRight={2}>
                 <FaUserAlt size={16}/>
                </Box>
                
                <Text >Meu Perfil</Text>
               
              </Button>
              </Flex>

              <Flex  alignItems="center" justifyContent="center">
               <Button
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit"         
              onClick={MyCards}
              >
                <Box marginRight={2} >
                  <BsFillCreditCardFill size={16} />
                </Box>
                
                <Text> Meus Cartões </Text>
                
              </Button>
              </Flex>

              <Flex alignItems="center" justifyContent="center">
               <Button
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={MyCategories}
              >
                <Box paddingRight={2}>
                <AiFillStar size={20} />
                </Box>
                
                <Text> Minhas Categórias </Text> 
                
              </Button>
              </Flex>

              <Flex alignItems="center" justifyContent="center">
               <Button
              background="primary.900"
              borderRightRadius="80px"
              borderBottomRightRadius="80px"
              py="1.2rem"
              width="80%"
              mt="2rem"
              alignItems="center"
              justifyContent="flex-start"
              type="submit" 
              onClick={MyRevenues}
              >
                <Box paddingRight={2}>
                <MdAttachMoney size={20}/>
                </Box>
                
                <Text> Minhas Receitas </Text>
              </Button>
              </Flex>
              
          </Box>
  );
};

export { SideNavigationBar };
