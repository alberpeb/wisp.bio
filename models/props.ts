import { Profile, CustomLink, ShortLink } from '@/models/models'

export interface LinkCardComponentProps {
    key: number
    link: CustomLink
  }
  
  export interface ProfileComponentProps {
    profile: Profile
  }
  
  export type AvatarEditProps = {
    avatar: string
    name: string
  }
  
  export type ShortLinkEditProps = {
    shortLinks: ShortLink[]
  }
  
  export type CustomLinkEditProps = {
    customLinks: CustomLink[]
  }