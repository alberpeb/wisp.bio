module Props {
  export interface ProfileProps {
    name: string
    username: string
    professional_qualities: string[]
    avatar: string
    welcome: string
    socials: ShortLink[]
    customLinks: CustomLink[]
    linklogin: CustomLink[]
    linkloginin: CustomLink[]
    linksignin: CustomLink[]
  }

  export interface AvatarProps {
    name: string
    avatarURL: string
  }

  export interface ShortLink {
    href: string
  }

  export interface CustomLink {
    title: string
    href: string
    image: string
  }

  export {}
}
