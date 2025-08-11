import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
}

function NavbarContainer({ children }: Readonly<Props>) {
  return <ul className="list-none w-auto h-10 flex flex-row">{children}</ul>;
}

export default NavbarContainer;
