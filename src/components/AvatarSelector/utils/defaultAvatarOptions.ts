import {
  manAvatar1,
  manAvatar2,
  manAvatar3,
  womanAvatar1,
  womanAvatar2,
} from "../../../assets/images/avatars";

export type Avatar = {
  id: string;
  imgSource: string;
  alternativeDescription: string;
};

export const defaultAvatarOptions: Avatar[] = [
  {
    alternativeDescription: "Avatar 1 feminino",
    imgSource: womanAvatar1,
    id: "WOMAN_AVATAR_1",
  },
  {
    alternativeDescription: "Avatar 2 feminino",
    imgSource: womanAvatar2,
    id: "WOMAN_AVATAR_2",
  },
  {
    alternativeDescription: "Avatar 1 masculino",
    imgSource: manAvatar1,
    id: "MAN_AVATAR_1",
  },
  {
    alternativeDescription: "Avatar 2 masculino",
    imgSource: manAvatar2,
    id: "MAN_AVATAR_2",
  },
  {
    alternativeDescription: "Avatar 3 masculino",
    imgSource: manAvatar3,
    id: "MAN_AVATAR_3",
  },
];

export const initialAvatar = defaultAvatarOptions[0];
