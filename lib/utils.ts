import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
//import { formatDistanceToNowStrict } from 'date-fns'
//import locale from 'date-fns/locale/en-US'

/** Merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
