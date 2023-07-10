export interface Profile {
  name: string;
  username: string;
  professional_qualities: string[];
  avatar: string;
  welcome: string;
  shortLinks: ShortLink[];
  customLinks: CustomLink[];
  linklogin: ShortLink[];
  linkloginin: ShortLink[];
  linksignin: ShortLink[];
}

export interface Avatar {
  name: string;
  avatarURL: string;
}

export interface ShortLink {
  title: string;
  href: string;
}

export interface CustomLink {
  title: string;
  href: string;
  image?: string;
}

export type UserSignupForm = {
  username: string;
  email: string;
  password: string;
  confirmpswd: string;
};

export type UserSigninForm = {
  usernameOrEmail: string;
  password: string;
};