import React, { useState } from "react";

// Componentes para las diferentes opciones
const Inicio = () => <div>Contenido de Inicio</div>;
const Perfil = () => <div>Contenido de Perfil</div>;
const Configuracion = () => <div>Contenido de Configuración</div>;

type Components = {
  [key: string]: () => JSX.Element;
};
const componentesPorOpcion: Components = {
  inicio: () => <div>Contenido de Inicio</div>,
  perfil: () => <div>Contenido de Perfil</div>,
  config: () => <div>Contenido de Configuración</div>,
};

const Sidebar2 = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("inicio");

  const renderizarComponente = () => {
    const ComponenteSeleccionado = componentesPorOpcion[opcionSeleccionada];
    return ComponenteSeleccionado ? <ComponenteSeleccionado /> : null;
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#f0f0f0", padding: "10px" }}>
        <div onClick={() => setOpcionSeleccionada("inicio")}>Inicio</div>
        <div onClick={() => setOpcionSeleccionada("perfil")}>Perfil</div>
        <div onClick={() => setOpcionSeleccionada("config")}>Configuración</div>
      </div>

      {/* Contenido principal */}
      <div style={{ marginLeft: "20px" }}>{renderizarComponente()}</div>
    </div>
  );
};

export default Sidebar2;
