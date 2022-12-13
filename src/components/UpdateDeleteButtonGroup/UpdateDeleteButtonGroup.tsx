import { Flex, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

import "./UpdateDeleteButtonGroup.styles.css";

type UpdateDeleteButtonGroupProps = {
  onClickDeleteExpenseButton: () => void;
  onClickUpdateExpenseButton: () => void;
};

const UpdateDeleteButtonGroup = ({
  onClickUpdateExpenseButton
}: UpdateDeleteButtonGroupProps) => {
  return (
    <Flex alignItems={"center"}>
      <IconButton
        aria-label="Editar Gasto"
        className="revenue-action-btn update-revenue-btn"
        variant={"ghost"}
        minWidth={0}
        minHeight={0}
        height={"1rem"}
        marginRight={"0.2rem"}
        icon={<SlOptionsVertical size={"0.9rem"} />}
        onClick={onClickUpdateExpenseButton}
      />
    </Flex>
  );
};

export { UpdateDeleteButtonGroup };
