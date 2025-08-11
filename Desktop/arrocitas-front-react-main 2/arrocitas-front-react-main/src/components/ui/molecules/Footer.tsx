import { FaFacebook, FaInstagram } from "react-icons/fa";
import ExternalLink from "../atoms/ExternalLink";
import Text from "../atoms/Text";

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] w-auto mb-0">
      <section className="flex  flex-row justify-center w-8/12 mx-auto mb-2 p-5">
        <ExternalLink
          link="https://web.facebook.com/arrocitasglutenfree?mibextid=ZbWKwL&_rdc=1&_rdr"
          styles="text-white text-3xl mx-10"
        >
          <FaFacebook />
        </ExternalLink>
        <ExternalLink
          link="https://www.instagram.com/arrocitas.glutenfree/"
          styles="text-white text-3xl mx-10"
        >
          <FaInstagram />
        </ExternalLink>
      </section>
      <Text styles="text-2xl text-white text-center">
        Delicioso snack horneado glutenfree
      </Text>
      <Text styles="text-base text-white text-center m-2">
        Copyright 2023 All Right Reserved By Arrocitas
      </Text>
    </footer>
  );
}

export default Footer;
