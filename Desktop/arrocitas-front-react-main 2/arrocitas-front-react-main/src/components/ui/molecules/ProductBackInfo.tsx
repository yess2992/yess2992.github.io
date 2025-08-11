import Text from "../atoms/Text";

import BackProduct from "../../../assets/images/BackProduct.png";
import Images from "../atoms/Images";

function ProductBackInfo() {
  return (
    <section className="w-8/12 mx-auto my-5">
      <Text styles="font-bold text-[#1c1c1c] text-center text-4xl ">
        🔥 Horneadas con Amor:
      </Text>
      <Text styles="text-[#1c1c1c] text-center">
        Renunciamos a las frituras, optando por el calor del horno para lograr
        la textura ideal: crujiente por fuera y por dentro. Descubre el arte de
        los snacks SIN ACEITE, donde el sabor y la salud se encuentran en cada
        crujido.
      </Text>
      <Images
        styles="my-4 mx-auto"
        route={BackProduct}
        alt="Imagen frontal del producto"
      />
    </section>
  );
}

export default ProductBackInfo;
