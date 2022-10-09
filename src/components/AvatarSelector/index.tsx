import { Box, Text, Image } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { AvatarOptionsList } from "./components";
import { Avatar, defaultAvatarOptions } from "./utils/defaultAvatarOptions";

const initialAvatar = defaultAvatarOptions[0];

const AvatarSelector = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(initialAvatar);

  const onChangeSelectedAvatar = useCallback((avatar: Avatar) => {
    setSelectedAvatar(avatar);
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems="center">
      <Text
        fontFamily={"Inter"}
        fontSize="1.2rem"
        fontWeight="medium"
        color="formTitle.900"
        mb="1rem"
      >
        Avatar
      </Text>

      <Image
        src={selectedAvatar.imgSource}
        height="7.7rem"
        alt={selectedAvatar.alternativeDescription}
      />
      <AvatarOptionsList
        onChangeSelectedAvatar={onChangeSelectedAvatar}
        selectedAvatar={selectedAvatar}
        mt="2rem"
      />
    </Box>
  );
};

export { AvatarSelector };
