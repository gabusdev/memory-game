import "./SingleCard.css";
import { FunctionComponent } from "react";
import { Card } from "../types/types";

interface SingleCardProps {
  card: Card;
  handleChoice: Function;
}

const SingleCard: FunctionComponent<SingleCardProps> = ({
  card,
  handleChoice,
}) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          onClick={handleClick}
          src='/img/cover.png'
          alt='card back'
        />
      </div>
    </div>
  );
};

export default SingleCard;
