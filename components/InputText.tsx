interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
}

export default function InputText({ name, children, ...rest }: InputProps) {
  return (
    <div>
      <input
        className="px-4 py-3 my-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        {...rest}>
            {children}
      </input>
    </div>
  );
}
