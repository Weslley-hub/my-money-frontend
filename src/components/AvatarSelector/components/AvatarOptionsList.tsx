import { Box, SpaceProps } from "@chakra-ui/react";
import { Avatar, defaultAvatarOptions } from "../utils/defaultAvatarOptions";
import { AvatarOption } from "./AvatarOption";

type AvatarOptionsListProps = SpaceProps & {
  selectedAvatar: Avatar;
  onChangeSelectedAvatar: (avatar: Avatar) => void;
};

const AvatarOptionsList = (props: AvatarOptionsListProps) => {
  const { selectedAvatar, onChangeSelectedAvatar, ...rest } = props;

  return (
    <Box display={"flex"} {...rest}>
      {defaultAvatarOptions.map((avatarOption) => (
        <AvatarOption
          onSelect={onChangeSelectedAvatar}
          data={avatarOption}
          key={avatarOption.id}
          isSelected={avatarOption.id === selectedAvatar.id}
        />
      ))}
    </Box>
  );
};

export { AvatarOptionsList };
