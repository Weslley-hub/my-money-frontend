import { Flex, Image } from "@chakra-ui/react";
import { logoVertical } from "../assets/images/logos";

export function LogoSection() {
  return (
    <Flex h="100vh" w="100%" justifyContent={"center"} alignItems="center">
      <Image
        src={logoVertical}
        height={{ "2xl": "10rem", lg: "6rem" }}
        alt="Logo MyMoney"
      />
    </Flex>
  );
}
