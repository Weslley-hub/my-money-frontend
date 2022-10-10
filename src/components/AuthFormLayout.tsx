import { Box, Heading, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

import { longArrowLeftIcon } from "../assets/images/icons/textfieds";

type AuthFormLayoutProps = {
  formTitle: string;
  hasGoBackButton?: boolean;
  children?: ReactNode;
  onClickGoBackButton?: () => void;
};

const AuthFormLayout = ({
  formTitle,
  hasGoBackButton,
  children,
  onClickGoBackButton,
}: AuthFormLayoutProps) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"90%"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
      >
        {hasGoBackButton && (
          <Image
            src={longArrowLeftIcon}
            height="1.4rem"
            cursor={"pointer"}
            mb="3rem"
            alignSelf={"flex-start"}
            ml="10%"
            onClick={onClickGoBackButton}
          />
        )}

        <Heading
          fontSize="2.25rem"
          color={"formTitle.900"}
          fontWeight={"semibold"}
          mb="3rem"
          textAlign={"left"}
          width={"80%"}
        >
          {formTitle}
        </Heading>

        {children}
      </Box>
    </Box>
  );
};

export { AuthFormLayout };
