import { Box, Text } from "@chakra-ui/react";
import { useCategorie } from "../../contexts/Categorie.context";
import { CategorieCard } from "./components";

type CategorieListProps = {
  width: string;
};

export type ExpenseModel = {
  description: string;
  icon: string;
  id: string;
};


const CategorieList = ({ width }: CategorieListProps) => {
  const { expenses } = useCategorie();

  return (
    <>
      <Box width={width}>
        

        <Box
          height={"50vh"}
          maxHeight={"50vh"}
          overflowY={"scroll"}
          marginTop={"2rem"}
        >
          {expenses.map((expense) => (
            <CategorieCard key={expense.id} data={expense} />
          ))}
        </Box>

        <Text marginTop={"2rem"} textAlign={"center"} color={"accentText.900"}>
          Role a lista para ver mais items
        </Text>
      </Box>
    </>
  );
};

export { CategorieList };
