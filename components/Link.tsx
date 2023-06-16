import NextLink, { LinkProps } from 'next/link';

type LinkComponentProps = {
  variant: 'primary' | 'secondary',
  children: string,
 } & LinkProps

export const Link = ({variant, children, ...rest }: LinkComponentProps) => {
  
  return <NextLink
    { ... rest }
  >
    { children }
  </NextLink>
}