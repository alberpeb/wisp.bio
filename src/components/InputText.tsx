interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
}

export default function InputText({ name, children, ...rest }: InputProps) {
  return (
    <div>
      <input
        type="text"
        className="my-2 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
        {...rest}
      >
        {children}
      </input>
    </div>
  );
}
