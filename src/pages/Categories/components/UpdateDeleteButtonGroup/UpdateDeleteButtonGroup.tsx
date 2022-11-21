import { Flex, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

import "./UpdateDeleteButtonGroup.styles.css";

const UpdateDeleteButtonGroup = () => {
  return (
    <Flex alignItems={"center"}>
      <IconButton
        className="revenue-action-btn delete-revenue-btn"
        aria-label="Excluir Receita"
        variant={"ghost"}
        minWidth={0}
        minHeight={0}
        height={"1rem"}
        marginRight={"0.6rem"}
        icon={<FaTrash size={"0.9rem"} />}
      />

      <IconButton
        aria-label="Editar Receita"
        className="revenue-action-btn update-revenue-btn"
        variant={"ghost"}
        minWidth={0}
        minHeight={0}
        height={"1rem"}
        marginRight={"0.2rem"}
        icon={<SlOptionsVertical size={"0.9rem"} />}
      />
    </Flex>
  );
};

export { UpdateDeleteButtonGroup };
