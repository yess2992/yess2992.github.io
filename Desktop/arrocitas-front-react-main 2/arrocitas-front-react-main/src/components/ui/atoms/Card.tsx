import Text from "./Text";

interface Props {
  name: string;
  review: string;
}

function Card({ name, review }: Readonly<Props>) {
  return (
    <section className="w-full md:w-5/12 rounded bg-[#1c1c1c] m-5 p-10">
      <Text styles="text-white font-bold text-xl">{name}</Text>
      <div className="border w-6/12 border-[#E0A526] my-2 ml-0"></div>
      <Text styles="text-white">
        <i>"{review}"</i>
      </Text>
    </section>
  );
}

export default Card;
