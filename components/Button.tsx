import * as React from 'react';
import clsxm from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  isLoading?: boolean;
  primary?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, size, ...props }, ref) => {

    const variant= "group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 ";
    return (
      <button
        className={"group inline-flex h-8 items-center gap-2.5 rounded-md bg-zinc-950 px-3 transition-all duration-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 " + clsxm({ variant, size, className })}
        ref={ref}
        disabled={isLoading}
        {...props}>
          {isLoading ? "<Loader2 className='mr-2 h-4 w-4 animate-spin' />" : null}
          {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
