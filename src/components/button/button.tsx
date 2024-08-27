import "./button.css";

interface ButtonProps {
  children: string;
  size?: "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  icon?: boolean;
  danger?: boolean;
}

export default function Button({
  children,
  size = "md",
  loading = false,
  disabled = false,
  icon = false,
  danger = false,
}: ButtonProps) {
  return <button className={`storybook-button--${size}`}>{children}</button>;
}
