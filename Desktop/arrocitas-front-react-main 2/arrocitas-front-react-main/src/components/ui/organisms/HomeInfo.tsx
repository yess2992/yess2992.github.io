import Images from "../atoms/Images";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import BannerHome from "../../../assets/images/BannerHome.png";
import Button from "../atoms/Button";
import { useState } from "react";
import PlayerVideo from "../atoms/PlayerVideo";

function HomeInfo() {
  const [video, setVideo] = useState(false);

  const handleClick = (value: unknown) => {
    console.log(value);
    setVideo(value as boolean);
  };
  return (
    <>
      <section className="bg-[#1c1c1c] p-10 w-auto h-auto flex flex-col justify-evenly">
        <Images styles="mt-20 w-8/12 mx-auto" route={BannerHome} alt="Banner" />
        <Title />
        <Text styles="text-3xl text-[#E0A526] text-center ">
          <i>El snack perfecto</i>
        </Text>
        <Text styles="text-xl text-[#E0A526] w-8/12 text-center mx-auto my-5">
          En el auge de los snacks saludables, Arrocitas es la opción distintiva
          para quienes valoran el bienestar sin sacrificar el placer. Perfectas
          para cualquier ocasión, desde tu rutina diaria hasta para la lonchera
          de tu hijo. Estas delicias crujientes acompañarán tus momentos con un
          sabor inigualable. ¡Descubre la magia de cuidarte mientras disfrutas
          cada bocado! 🌿✨
        </Text>
        <Button
          onClick={handleClick}
          value={!!video}
          styles="bg-[#E0A526] hover:bg-white text-[#1c1c1c] border-none w-[200px] p-4 mx-auto mb-10 text-center"
        >
          VER PRODUCTO
        </Button>
        {
          video && <PlayerVideo/>
        }
      </section>
      <section className="bg-[#E0A525] w-auto h-15">
        <Text styles="text-white text-3xl p-5 text-center">
          ¡Los invito a enamorarse de Arrocitas, porque una vez lo hagan, no
          podrán parar de comer! 😋
        </Text>
      </section>
    </>
  );
}

export default HomeInfo;
