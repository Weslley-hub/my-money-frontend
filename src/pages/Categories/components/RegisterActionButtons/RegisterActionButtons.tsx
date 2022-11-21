import { Flex } from "@chakra-ui/react";

import { ButtonWithIcon } from "../ButtonWithIcon";
import { FaPlus } from "react-icons/fa";
import { themePallete } from "../../../../global/styles/theme";

const RegisterActionButtons = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <ButtonWithIcon
        paddingX={"1.2rem"}
        paddingY={"0.8rem"}
        height={"100%"}
        marginY={"0px"}
        backgroundColor={"primary.900"}
        Icon={<FaPlus size={"0.8rem"} color={themePallete.colors.light[900]} />}
        label={"Despesa"}
        marginRight={"1rem"}
        width={"10rem"}
      />

      <ButtonWithIcon
        paddingX={"1.2rem"}
        paddingY={"0.8rem"}
        height={"100%"}
        marginY={"0px"}
        backgroundColor={"primary.900"}
        Icon={<FaPlus size={"0.8rem"} color={themePallete.colors.light[900]} />}
        label={"Receita"}
        width={"10rem"}
      />
    </Flex>
  );
};

export { RegisterActionButtons };
