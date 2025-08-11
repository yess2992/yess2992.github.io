import AboutBg from "../../../assets/images/AboutBg.png";
import Text from "../atoms/Text";
import ProductBackInfo from "../molecules/ProductBackInfo";
import ProductFrontInfo from "../molecules/ProductFrontInfo";
import Review from "../molecules/Review";

const backgrounImageStyle = {
  backgroundImage: `url(${AboutBg})`,
};

function Product() {
  return (
    <>
      <article
        className="bg-cover bg-center h-auto relative p-10"
        style={backgrounImageStyle}
      >
        <section className="bg-[#E0A526] p-5 w-10/12 mx-auto rounded-xl">
          <ProductFrontInfo />
          <ProductBackInfo />
        </section>
      </article>
      <article className="">
        <Text styles="text-4xl font-bold text-center m-5">Qué dice mi cliente...</Text>
        <div className="w-3/12 md:w-2/12 h-3/12 bg-[#E0A526] p-1 rounded-xl mx-auto"><div className="border w-6/12 border-white my-2 mx-auto"></div></div>
        <Review />
      </article>
    </>
  );
}

export default Product;
