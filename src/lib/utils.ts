import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
//import { formatDistanceToNowStrict } from 'date-fns'
//import locale from 'date-fns/locale/en-US'

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmail(value: string): boolean {
  //const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const expression: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return expression.test(value);
}

export function processUserSignin({
  usernameOrEmail,
}: {
  usernameOrEmail: string;
  password: string;
}): {
  username: string | null;
  email: string | null;
} {
  let username: string | null = null;
  let email: string | null = null;

  if (isEmail(usernameOrEmail)) {
    email = usernameOrEmail;
  } else {
    username = usernameOrEmail;
  }

  return { username, email };
}
