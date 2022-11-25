import { Flex } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { ButtonWithIcon } from "../ButtonWithIcon";
import { themePallete } from "../../../../global/styles/theme";
import { useCategorie } from "../../contexts/Categorie.context";

type RegisterActionButtonsProps = {};

const RegisterActionButtons = ({}: RegisterActionButtonsProps) => {
  const { openCategorieModal } = useCategorie();

  function openRegisterExpenseModal() {
    openCategorieModal();
  }

  

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <ButtonWithIcon
        paddingX={"1.2rem"}
        paddingY={"0.8rem"}
        height={"100%"}
        marginY={"0px"}
        backgroundColor={"primary.900"}
        Icon={<FaPlus size={"0.8rem"} color={themePallete.colors.light[900]} />}
        label={"Categoria"}
        marginRight={"1rem"}
        width={"10rem"}
        onClick={openRegisterExpenseModal}
      />

      
    </Flex>
  );
};

export { RegisterActionButtons };
