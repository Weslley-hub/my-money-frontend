import { ButtonProps, Flex, Text } from "@chakra-ui/react";
import { Button } from "../../../../components";

import "./ButtonWithIcon.styles.css";

export type ButtonWithIconProps = ButtonProps & {
  Icon: JSX.Element;
  label: string;
};

const ButtonWithIcon = ({ Icon, label, ...rest }: ButtonWithIconProps) => {
  return (
    <Button
      {...rest}
      fontWeight={"semibold"}
      fontSize={"1rem"}
      fontFamily={"Inter"}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {Icon}
        <Text marginLeft={"0.4rem"}>{label}</Text>
      </Flex>
    </Button>
  );
};

export { ButtonWithIcon };
