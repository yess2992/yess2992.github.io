import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

function NavbarItem({ children }: Readonly<Props>) {
  return <li className="list-none m-2 p-4 w-[100px]">{children}</li>;
}

export default NavbarItem;
