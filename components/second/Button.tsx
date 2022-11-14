interface ButtonProps {
  size?: "large" | "medium";
  className?:string
  children: React.ReactNode | string;
  onClick?: () => void;
}

export const Button = ({
  size = "large",
  onClick = () => undefined,
  className = '',
  children,
}: ButtonProps) => (
  <button
    type="button"
    className={`${
      size === "large" ? "w-full h-14" : "w-[165px] h-14"
    } bg-gradient-to-r from-[#35A483] to-[#077854]  text-white py-4 flex justify-center items-center text-lg rounded-2xl ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
