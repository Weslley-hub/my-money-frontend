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
      width={{
        "2xl": "80%",
        lg: "100%",
      }}
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
            height="1.2rem"
            cursor={"pointer"}
            mb={{
              "2xl": "3rem",
              lg: "1.4rem",
            }}
            alignSelf={"flex-start"}
            ml="10%"
            onClick={onClickGoBackButton}
          />
        )}

        <Heading
          fontSize={{
            "2xl": "2.25rem",
            lg: "1.4rem",
          }}
          color={"formTitle.900"}
          fontWeight={"semibold"}
          mb={{
            "2xl": "3rem",
            lg: "2.2rem",
          }}
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
