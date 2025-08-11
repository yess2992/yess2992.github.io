import HomeTemplate from "./components/templates/HomeTemplate";
import Footer from "./components/ui/molecules/Footer";
import NavBar from "./components/ui/molecules/Navbar";
import { ALLOWED_TEMPLATES } from "./utils/Constants";
import { useState } from "react";

function App() {
  const [template, setTemplate] =
    useState<keyof typeof ALLOWED_TEMPLATES>("HOME");

  const goToTemplate = (newTemplate: keyof typeof ALLOWED_TEMPLATES) => {
    setTemplate(newTemplate);
  };
  return (
    <>
      <NavBar onclick={goToTemplate} />
      <HomeTemplate template={template} />
      <Footer />
    </>
  );
}

export default App;
