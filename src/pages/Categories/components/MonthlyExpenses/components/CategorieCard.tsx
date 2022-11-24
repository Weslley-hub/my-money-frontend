import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { themePallete } from "../../../../../global/styles/theme";
import { CategorieModel } from "../../../../../models";
import { useCategorie } from "../../../contexts/Categorie.context";
import { UpdateDeleteButtonGroup } from "../../UpdateDeleteButtonGroup";

type CategorieCardProps = {
  data: CategorieModel;
};

const CategorieCard = ({ data: expense }: CategorieCardProps) => {
  const { removeExpense, openExpenseModal } = useCategorie();

  function handleRemoveExpense() {
    removeExpense(expense.id);
  }

  function handleUpdateExpense() {
    openExpenseModal(expense);
  }

  return (
    <Flex
      height={"9rem"}
      width={"100%"}
      marginBottom={"2rem"}
      background={"accent.900"}
      borderRadius="4px"
      alignItems={"center"}
    >
      <Box
        height={"100%"}
        width={"0.5rem"}
        backgroundColor={"primary.900"}
        borderRadius={"4px"}
      />
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
              {expense.icon}
            </Text>

            <Box marginLeft={"0.6rem"}>
              <Heading color={"strongText.900"} fontSize={"1.5rem"}>
                {expense.description}
              </Heading>

            
            </Box>
          </Flex>

          <Flex
            flexDirection={"column"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <UpdateDeleteButtonGroup
              onClickDeleteExpenseButton={handleRemoveExpense}
              onClickUpdateExpenseButton={handleUpdateExpense}
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
