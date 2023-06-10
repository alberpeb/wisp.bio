module Props {
  export interface ProfileProps {
    name: string;
    username: string;
    professional_qualities: string[];
    avatar: string;
    welcome: string;
    socials: Social[];
    links: Link[];
    linklogin: Link[];
    linkloginin: Link[];
    linksignin: Link[];
  };

  export interface AvatarProps {
    name: string;
    avatarURL: string;
  }
}

export interface Social {
  href: string;
}

export interface Link {
  title: string;
  href: string;
  image: string;
}