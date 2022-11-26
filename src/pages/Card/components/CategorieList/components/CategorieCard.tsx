import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { themePallete } from "../../../../../global/styles/theme";
import { CategorieModel } from "../../../../../models";
import { useCategorie } from "../../../contexts/Categorie.context";
import { UpdateDeleteButtonGroup } from "../../UpdateDeleteButtonGroup";

type CategorieCardProps = {
  data: CategorieModel;
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
    <Box width={"90%"} marginBottom={"1rem"} paddingY={"1rem"} paddingX={"1rem"} background={"gray.500"}>
      <Text>{categorie.description}</Text>
      <Text>Nº {categorie.icon}</Text>
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
    </Box>
  );
};

export { CategorieCard };
