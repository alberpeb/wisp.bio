import { Profile, CustomLink, MainLink } from '@/data/models';

export interface ProfileComponentProps {
  profile: Profile;
}

export type AvatarEditProps = {
  avatar: string;
  name: string;
};

export type MainLinkEditProps = {
  mainLinks: MainLink[];
};

export type CustomLinkEditProps = {
  customLinks: CustomLink[];
};
