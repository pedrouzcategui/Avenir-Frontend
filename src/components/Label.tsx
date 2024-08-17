interface LabelProps {
  name: string;
  children: React.ReactNode;
}

export default function Label({ name, children }: LabelProps) {
  return (
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  );
}
