import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { LogoSection } from "./LogoSection";

type AuthPageLayoutProps = {
  children?: React.ReactNode;
};

const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <Box h="100vh" w="100%">
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem h="100vh" w="100%" bg="primary.900">
          <LogoSection />
        </GridItem>
        <GridItem w="100%" h="100vh" bg="tertiary.900">
          <Flex h="100vh" w="100%">
            {children}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export { AuthPageLayout };
