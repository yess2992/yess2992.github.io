import { ReactNode } from "react";
import { ALLOWED_TEMPLATES, CustomStyles } from "../../../utils/Constants";

interface Props {
  children: string | ReactNode;
  onClick: (newTemplate: keyof typeof ALLOWED_TEMPLATES) => void;
  typeTemplate: keyof typeof ALLOWED_TEMPLATES;
  styles: string | undefined;
}

function ButtonNavbar({
  children,
  onClick,
  typeTemplate,
  styles,
}: Readonly<Props>) {
  const handleClick = () => {
    console.log(typeTemplate);
    onClick(typeTemplate!);
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

export default ButtonNavbar;
