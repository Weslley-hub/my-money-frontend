import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { UpdateDeleteButtonGroup } from "../../../../../components/UpdateDeleteButtonGroup";
import { themePallete } from "../../../../../global/styles/theme";

import { Card } from "../../../../../models/Card";
import { useCategorie } from "../../../contexts/Categorie.context";

type CategorieCardProps = {
  data: Card;
};

const CategorieCard = ({ data: categorie }: CategorieCardProps) => {
  const { removeCategorie, openCategorieModal } = useCategorie();

  function handleRemoveCategorie() {
    removeCategorie(categorie.id);
  }

  function handleUpdateCategorie() {
    openCategorieModal(categorie);
  }

  return (
    <Flex
      height={"9rem"}
      width={"90%"}
      marginBottom={"2rem"}
      background={"accent.900"}
      borderRadius="4px"
      alignItems={"center"}
      
    >
     
      <Flex
        justifyContent={"center"}
        width={"100%"}
        paddingX={"1rem"}
        flexDirection={"column"}
      >
        
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Text
              color={themePallete.colors.primary[900]}
              fontSize={"3rem"}
              mb={"0.2rem"}
            >
              {categorie.flag}
            </Text>

            <Box marginLeft={"0.6rem"}>
              <Text>
                {categorie.name}
                {categorie.number}
                {categorie.type}
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
              onClickDeleteExpenseButton={handleRemoveCategorie}
              onClickUpdateExpenseButton={handleUpdateCategorie}
            />

            <Flex
              alignItems={"flex-end"}
              marginTop={"0.5rem"}
              marginBottom={"0.05rem"}
            >
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { CategorieCard };
