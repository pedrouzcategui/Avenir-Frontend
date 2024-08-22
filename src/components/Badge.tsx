import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  type?: "success" | "danger" | "default";
}

export default function Badge({ children, type = "default" }: BadgeProps) {
  return (
    <span
      className={clsx("px-4 py-2 rounded-md bg-green-100 text-green-800", type)}
    >
      {children}
    </span>
  );
}
