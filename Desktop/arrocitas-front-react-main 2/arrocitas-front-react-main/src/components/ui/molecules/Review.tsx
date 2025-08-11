import Card from "../atoms/Card";
import { reviews } from "../../../utils/reviews";

type Review = {
  id: number;
  name: string;
  review: string;
};

function Review() {
  return (
    <section className="flex flex-wrap justify-evenly">
      {reviews.map(({ id, name, review }) => (
        <Card key={id} name={name} review={review} />
      ))}
    </section>
  );
}

export default Review;
