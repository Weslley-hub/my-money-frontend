import { Box, Image } from "@chakra-ui/react";
import { Avatar } from "../utils/defaultAvatarOptions";

type AvatarOptionProps = {
  data: Avatar;
  isSelected: boolean;
  onSelect: (avatar: Avatar) => void;
};

const AvatarOption = ({ data, onSelect, isSelected }: AvatarOptionProps) => {
  function handleAvatarClick() {
    onSelect(data);
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent={"center"}
      mx="0.75rem"
      cursor={"pointer"}
      opacity={isSelected ? 1 : 0.5}
      _hover={{
        opacity: 1,
      }}
      transition={"all"}
      transitionDuration={"0.5s"}
      onClick={handleAvatarClick}
    >
      <Image
        height={"2.4rem"}
        width={"2.4rem"}
        src={data.imgSource}
        alt={data.alternativeDescription}
        mb="0.3rem"
      />

      {isSelected && (
        <Box
          width={"50%"}
          background="primary.900"
          height={"3px"}
          borderRadius="2px"
        />
      )}
    </Box>
  );
};

export { AvatarOption };
