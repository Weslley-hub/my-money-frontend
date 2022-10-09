import { Box, Text, Image, SpaceProps } from "@chakra-ui/react";

import { Avatar } from "./utils/defaultAvatarOptions";
import { AvatarOptionsList } from "./components";

type AvatarSelectorProps = SpaceProps & {
  selectedAvatar: Avatar;
  onChangeSelectedAvatar: (avatar: Avatar) => void;
};

const AvatarSelector = (props: AvatarSelectorProps) => {
  const { onChangeSelectedAvatar, selectedAvatar, ...rest } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      {...rest}
    >
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
