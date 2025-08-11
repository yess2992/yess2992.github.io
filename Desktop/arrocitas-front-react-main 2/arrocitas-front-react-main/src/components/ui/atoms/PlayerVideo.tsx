import ReactPlayer from "react-player";
import Arrocitas from "../../../assets/mp4/Arrocitas.mp4";

function PlayerVideo() {
  return (
    <section className="w-full mx-auto flex justify-center my-5 p-0 overflow-hidden">
      <ReactPlayer controls url={Arrocitas} />
    </section>
  );
}

export default PlayerVideo;
