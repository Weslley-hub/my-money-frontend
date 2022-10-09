import manAvatarImg1 from "../../../assets/images/icons/avatars/man_avatar_1.svg";
import manAvatarImg2 from "../../../assets/images/icons/avatars/man_avatar_2.svg";
import manAvatarImg3 from "../../../assets/images/icons/avatars/man_avatar_3.svg";
import womanAvatarImg1 from "../../../assets/images/icons/avatars/woman_avatar_1.svg";
import womanAvatarImg2 from "../../../assets/images/icons/avatars/woman_avatar_2.svg";

export type Avatar = {
  id: string;
  imgSource: string;
  alternativeDescription: string;
};

export const defaultAvatarOptions: Avatar[] = [
  {
    alternativeDescription: "Avatar 1 feminino",
    imgSource: womanAvatarImg1,
    id: "WOMAN_AVATAR_1",
  },
  {
    alternativeDescription: "Avatar 2 feminino",
    imgSource: womanAvatarImg2,
    id: "WOMAN_AVATAR_2",
  },
  {
    alternativeDescription: "Avatar 1 masculino",
    imgSource: manAvatarImg1,
    id: "MAN_AVATAR_1",
  },
  {
    alternativeDescription: "Avatar 2 masculino",
    imgSource: manAvatarImg2,
    id: "MAN_AVATAR_2",
  },
  {
    alternativeDescription: "Avatar 3 masculino",
    imgSource: manAvatarImg3,
    id: "MAN_AVATAR_3",
  },
];
