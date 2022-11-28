import { Flex } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { ButtonWithIcon } from "../../../../components/ButtonWithIcon";

import { themePallete } from "../../../../global/styles/theme";
import { useExpenses } from "../../contexts/Expenses.context";

type RegisterActionButtonsProps = {};

const RegisterActionButtons = ({}: RegisterActionButtonsProps) => {
  const { openExpenseModal } = useExpenses();

  function openRegisterExpenseModal() {
    openExpenseModal();
  }

  function openRegisterRevenueModal() {}

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
        onClick={openRegisterExpenseModal}
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
        onClick={openRegisterRevenueModal}
      />
    </Flex>
  );
};

export { RegisterActionButtons };
