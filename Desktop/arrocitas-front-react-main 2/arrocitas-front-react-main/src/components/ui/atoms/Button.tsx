import { ReactNode } from "react";
import { CustomStyles } from "../../../utils/Constants";

interface Props {
  children: string | ReactNode;
  onClick: (value: unknown) => void;
  styles: string | undefined;
  value: unknown;
}

function Button({ children, onClick, styles, value }: Readonly<Props>) {
  const handleClick = () => {
    onClick(!value);
  };
  return (
    <button
      className={`border rounded-2xl cursor-pointer font-bold ${
        CustomStyles.TEXT_COLOR_BUTTONS
      } hover:bg-[#E0A526] ${styles ?? ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
