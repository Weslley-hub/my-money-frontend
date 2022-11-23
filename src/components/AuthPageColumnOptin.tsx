import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";

type AuthPageColumnOptinProps = {
  children?: React.ReactNode;
};

const AuthPageColumnOptin = ({ children }: AuthPageColumnOptinProps) => {
  return (
    <Box h="100vh" w="100%">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem h="100vh" w="100%" bg="primary.900">
        </GridItem>
        <GridItem w="100%" h="100vh" bg="tertiary.900">
          <Flex
            h="100vh"
            w="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            {children}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export { AuthPageColumnOptin };
