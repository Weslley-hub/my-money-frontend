import { Flex, Heading, Image } from "@chakra-ui/react";
import { manAvatar1 } from "../../assets/images/avatars";
import { gearIcon, logoutIcon } from "../../assets/images/icons";

import { UserDetailsActionButton } from "./components/UserDetailsButton";

import { useNavigate } from "react-router-dom";


const UserDetails = () => {
  const navigate = useNavigate();


  function handleLogout() {

    localStorage.removeItem("token");
    navigate({
            pathname: "/auth/login",
    });
  }

  function navigateToSettings() {
    navigate({
            pathname: "/profile-settings",
    });
  }

  return (
    <Flex>
      <Flex
        marginRight={"1rem"}
        flexDirection={"column"}
        alignItems={"flex-end"}
      >
        <Heading
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"1.1rem"}
          color={"light.900"}
        >
          Alex Mota
        </Heading>

        <Flex marginTop={"0.5rem"}>
          <UserDetailsActionButton
            alt="Config."
            iconSource={gearIcon}
            onClick={navigateToSettings}
          />
          <UserDetailsActionButton
            alt="Sair"
            iconSource={logoutIcon}
            onClick={handleLogout}
          />
        </Flex>
      </Flex>
      <Image src={manAvatar1} height={"3.5rem"} width={"3.5rem"} alt="Avatar" />
    </Flex>
  );
};

export { UserDetails };
