import { Flex, Image } from "@chakra-ui/react";
import { logoHorizontal } from "../../../assets/images/logos";
import { UserDetails } from "./UserDetails";

const Header = () => {
  return (
    <Flex
      width={"100%"}
      background={"primary.900"}
      paddingY={"1.2rem"}
      paddingX={"2rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Image src={logoHorizontal} height={"2.4rem"} width="auto" />
      <UserDetails />
    </Flex>
  );
};

export { Header };
