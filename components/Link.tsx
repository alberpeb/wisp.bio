import NextLink, { LinkProps } from 'next/link';

type LinkComponentProps = {
  children: string;
} & LinkProps;

export const Link = ({ children, ...rest }: LinkComponentProps) => {
  return <NextLink {...rest}>{children}</NextLink>;
};
