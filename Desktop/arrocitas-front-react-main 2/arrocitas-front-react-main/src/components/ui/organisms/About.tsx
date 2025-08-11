import { FaWhatsapp } from "react-icons/fa";
import AboutBg from "../../../assets/images/AboutBg.png";
import Text from "../atoms/Text";
import { FaLocationCrosshairs } from "react-icons/fa6";
import ExternalLink from "../atoms/ExternalLink";

const backgrounImageStyle = {
  backgroundImage: `url(${AboutBg})`,
};

function About() {
  return (
    <article
      className="bg-cover bg-center h-auto relative p-10"
      style={backgrounImageStyle}
    >
      <section className="bg-[#E0A526] h-screen flex justify-around flex-col p-5 md:p-10 w-10/12 md:w-8/12 mx-auto rounded-xl">
        <Text styles="text-3xl xl:text-4xl text-center font-bold text-[#1c1c1c]">
          Acerca de mi
        </Text>
        <Text styles="text-xl my-2 p-2 text-[#1c1c1c]">
          Soy una mujer emprendedora, mi historia comienza con el desarrollo de
          Arrocitas. Un snack horneado y libre de gluten, inspiradas en la
          búsqueda constante de sabores únicos y opciones más saludables.
        </Text>
        <Text styles="text-xl my-2 p-2 text-[#1c1c1c]">
          Con Arrocitas, no solo ofrezco un snack; ofrezco una experiencia de
          sabor única, nutritiva y llena de alegría. Mi sueño es llevar esta
          delicia a todos los rincones del país, para que todos podamos
          disfrutar de la magia de cuidarnos sin renunciar al placer.
        </Text>
        <Text styles="font-bold text-2xl text-center text-[#1c1c1c]">
          ¡GRACIAS POR SER PARTE DE ESTA CRUJIENTE AVENTURA!
        </Text>
        <section className="flex justify-around">
          <ExternalLink
            link="https://api.whatsapp.com/send/?phone=573218414224"
            styles="font-bold text-4xl text-center text-white"
          >
            <FaWhatsapp />
          </ExternalLink>
          <Text styles="font-bold text-3xl w-4/12 container text-center text-white flex justify-end ml-5">
            <FaLocationCrosshairs />
            <Text styles="font-bold text-sm text-center text-white ml-5">
              Manizales, Caldas
            </Text>
          </Text>
        </section>
      </section>
    </article>
  );
}

export default About;
