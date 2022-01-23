import { FunctionComponent } from "react";
import { Card } from "../types/types";

interface SingleCardProps {
  card: Card;
}

const SingleCard: FunctionComponent<SingleCardProps> = ({ card }) => {
  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front' />
        <img className='back' src='/img/cover.png' alt='card back' />
      </div>
    </div>
  );
};

export default SingleCard;
