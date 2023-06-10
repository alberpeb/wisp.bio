module Props {
  export interface ProfileProps {
    name: string;
    username: string;
    professional_qualities: string[];
    avatar: string;
    welcome: string;
    socials: ShortLink[];
    links: Link[];
    linklogin: Link[];
    linkloginin: Link[];
    linksignin: Link[];
  };

  export interface AvatarProps {
    name: string;
    avatarURL: string;
  }

  export interface ShortLink {
    href: string;
  }
}

export interface Link {
  title: string;
  href: string;
  image: string;
}