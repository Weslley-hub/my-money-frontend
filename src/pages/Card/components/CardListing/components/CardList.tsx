import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { UpdateDeleteButtonGroup } from "../../../../../components/UpdateDeleteButtonGroup";
import { themePallete } from "../../../../../global/styles/theme";

import { Card } from "../../../../../models/Card";
import { useCard } from "../../../contexts/Categorie.context";

type CardProps = {
  data: Card;
};

const CardList = ({ data: card }: CardProps) => {
  const { removeCard, openCardModal } = useCard();

  function handleRemoveCard() {
    removeCard(card.id);
  }

  function handleUpdateCard() {
    openCardModal(card);
  }

  return (
    <Flex
      height={"9rem"}
      width={"90%"}
      marginBottom={"2rem"}
      background={"accent.900"}
      borderRadius="4px"
      alignItems={"start"}
      
    >
     
      <Flex
        justifyContent={"center"}
        width={"100%"}
        paddingX={"1rem"}
        flexDirection={"column"}
      >
        <Flex width={"100%"} alignItems={"center"} justifyContent={"space-between"} marginTop={"0.5rem"}>
          <Flex>
           
          </Flex>
          
          <Flex
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <UpdateDeleteButtonGroup
              onClickDeleteExpenseButton={handleRemoveCard}
              onClickUpdateExpenseButton={handleUpdateCard}
            />

            <Flex
              alignItems={"flex-end"}
              marginTop={"0.5rem"}
              marginBottom={"0.05rem"}
            >
            </Flex>
          </Flex>
        </Flex>
        <Flex>
           <Text fontSize={"1rem"}>{card.number}</Text>
          </Flex>
          <Flex>
           <Text>{card.type}</Text>
          </Flex>
          <Flex marginTop={"2rem"} justifyContent={"flex-end"} width={"100%"}>
           <Text fontSize={"1rem"}>{card.flag}</Text>
          </Flex>
      </Flex>
      
    </Flex>
  );
};

export { CardList };
