import { ProfileSettingsConfig } from "./components";
import { SideNavigationBar } from "../../components/SideNavigationBar";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "../../global";


const ProfileSettings = () => {
  return (
        
    <Box height="100hv" width="100%" >
        <Header />
        <Flex  height="80hv" width="100%" alignItems="center">
          <SideNavigationBar/>
          < ProfileSettingsConfig />
        </Flex>
    </Box>
  );
};

export { ProfileSettings };
