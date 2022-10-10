import { Flex, Image } from "@chakra-ui/react";

import logoImg from "../assets/images/logo-vertical.svg";

export function LogoSection() {
  return (
    <Flex h="100vh" w="100%" justifyContent={"center"} alignItems="center">
      <Image src={logoImg} height="10rem" alt="Logo MyMoney" />
    </Flex>
  );
}
