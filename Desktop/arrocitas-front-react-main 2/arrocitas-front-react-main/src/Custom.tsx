import { ReactNode } from "react";

interface ChildrenProps {
  children: string | ReactNode;
}

interface SideBarItemsProps extends ChildrenProps {
  element: string;
  sendToFather: (element: string) => void;
}

const estiloLista = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export function SidebarItem({
  children,
  element,
  sendToFather,
}: Readonly<SideBarItemsProps>) {
  const handleClick = () => {
    console.log("clicked");
    sendToFather(element);
  };
  return (
    <li style={estiloLista}>
      <button
        style={{
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 0,
          cursor: "pointer",
          transition: "background-color 0.3s", // Agrega transición para suavizar el efecto
          backgroundColor: "#ccc", // Fondo por defecto
        }}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}


export function Sidebar({ children }: Readonly<ChildrenProps>) {
  return <ul style={estiloLista}>{children}</ul>;
}
