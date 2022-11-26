import { Box, Grid, Text } from "@chakra-ui/react";
import { useCategorie } from "../../contexts/Categorie.context";
import { CategorieCard } from "./components";

type CategorieListProps = {
  width: string;
};

export type CategorieModel = {
  description: string;
  icon: string;
  id: string;
};


const CategorieList = ({ width }: CategorieListProps) => {
  const { categories } = useCategorie();

  return (
    <>
      <Box width={width} >
        

        <Grid
          templateColumns={"1fr 1fr"}
          height={"50vh"}
          maxHeight={"50vh"}
          marginTop={"2rem"}
          overflowY={"scroll"}
        
        >
          {categories.map((categorie) => (
            <CategorieCard key={categorie.id} data={categorie} />
          ))}
        </Grid>

        <Text marginTop={"2rem"} textAlign={"center"} color={"accentText.900"}>
          Role a lista para ver mais items
        </Text>
      </Box>
    </>
  );
};

export { CategorieList };
