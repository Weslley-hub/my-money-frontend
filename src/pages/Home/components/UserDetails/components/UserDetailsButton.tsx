import { Button, Image } from "@chakra-ui/react";

type UserDetailsActionButtonProps = {
  iconSource: string;
  alt: string;
  onClick: () => void;
};

const UserDetailsActionButton = ({
  iconSource,
  alt,
  onClick,
}: UserDetailsActionButtonProps) => {
  return (
    <Button
      padding={"0px"}
      margin={"0px"}
      height={"1.8rem"}
      width={"1.8rem"}
      minHeight={"1.8rem"}
      minWidth={"1.8rem"}
      borderRadius={"1.8rem"}
      marginLeft={"0.5rem"}
      onClick={onClick}
    >
      <Image
        src={iconSource}
        margin="0px"
        padding={"0px"}
        height={"55%"}
        width={"55%"}
        alt={alt}
      />
    </Button>
  );
};

export { UserDetailsActionButton };
