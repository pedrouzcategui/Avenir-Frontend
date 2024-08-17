interface FormControlProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function FormControl({ children }: FormControlProps) {
  return <div className="mb-4">{children}</div>;
}
