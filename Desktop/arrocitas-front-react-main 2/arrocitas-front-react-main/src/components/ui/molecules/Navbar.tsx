import { FaHome } from "react-icons/fa";
import ButtonNavbar from "../atoms/ButtonNavbar";
import NavbarContainer from "../atoms/NavbarContainer";
import NavbarItem from "../atoms/NavbarItem";
import { CiShoppingBasket } from "react-icons/ci";
import { GiInfo } from "react-icons/gi";
import { ALLOWED_TEMPLATES, CustomStyles } from "../../../utils/Constants";

interface Props {
  onclick: (newTemplate: keyof typeof ALLOWED_TEMPLATES) => void;
}

function NavBar({ onclick }: Readonly<Props>) {
  const handleClick = (template: keyof typeof ALLOWED_TEMPLATES) => {
    console.log(`Type of template on navbar: ${template}`);
    onclick(template);
  };
  return (
    <header
      className={`w-full h-20  mt-0 flex justify-around overflow-hidden ${CustomStyles.PRINCIPAL_BACKGROUND}`}
    >
      <NavbarContainer>
        <NavbarItem>
          <ButtonNavbar
            onClick={handleClick}
            typeTemplate="HOME"
            styles="w-auto p-2 text-3xl bg-white border-none"
          >
            <FaHome />
          </ButtonNavbar>
        </NavbarItem>
        <NavbarItem>
          <ButtonNavbar
            onClick={handleClick}
            typeTemplate="PRODUCT"
            styles="w-auto p-2 text-3xl bg-white border-none"
          >
            <CiShoppingBasket />
          </ButtonNavbar>
        </NavbarItem>
        <NavbarItem>
          <ButtonNavbar
            typeTemplate="ABOUT"
            onClick={handleClick}
            styles="w-auto p-2 text-3xl bg-white border-none"
          >
            <GiInfo />
          </ButtonNavbar>
        </NavbarItem>
      </NavbarContainer>
    </header>
  );
}

export default NavBar;
