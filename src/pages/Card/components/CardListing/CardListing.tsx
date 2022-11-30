import { Box, Grid, Text } from "@chakra-ui/react";
import { useCard } from "../../contexts/Categorie.context";
import { CardList } from "./components";

type CardListProps = {
  width: string;
};



const CardListing = ({ width }: CardListProps) => {
  const { cards } = useCard();

  return (
    <>
      <Box width={width} >
        

        <Grid
          templateColumns={"1fr 1fr"}
          height={"60vh"}
          maxHeight={"100vh"}
          marginTop={"2rem"}
          overflowY={"scroll"}
          
        >
          {cards.map((card) => (
            <CardList key={card.id} data={card} />
          ))}
        </Grid>

        
      </Box>
    </>
  );
};

export { CardListing };
