import FrontProduct from "../../../assets/images/FrontProduct.png";
import Text from "../atoms/Text";
import Images from "../atoms/Images";

function ProductFrontInfo() {
  return (
    <section className="w-8/12 mx-auto my-5">
      <Text styles="font-bold text-[#1c1c1c] text-center text-4xl ">
        🌾 Libre de Gluten:
      </Text>
      <Text styles="text-[#1c1c1c] text-center">
        🌾 Creo firmemente que todos deberíamos disfrutar de un snack delicioso,
        independientemente de las restricciones dietéticas. Es por eso que
        Arrocitas son completamente libres de gluten, para que puedas deleitarte
        sin preocupaciones.
      </Text>
      <Images
        styles="my-4 mx-auto"
        route={FrontProduct}
        alt="Imagen frontal del producto"
      />
    </section>
  );
}

export default ProductFrontInfo;
