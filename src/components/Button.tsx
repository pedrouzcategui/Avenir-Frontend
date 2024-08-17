import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary" | "default";
  className?: string;
}

const default_button_style =
  "font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 focus:outline-none bg-gray-200";

export default function Button({
  children,
  type = "button",
  variant = "default",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={clsx(default_button_style, className, variant)}
      type={type}
    >
      {children}
    </button>
  );
}
