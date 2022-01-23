import { FunctionComponent } from "react";
import { Card } from "../types/types";
import SingleCard from "./SingleCard";

interface CardDeckProps {
  cards: Card[];
  handleChoice: Function;
}

const CardDeck: FunctionComponent<CardDeckProps> = ({
  cards,
  handleChoice,
}) => {
  return (
    <>
      {cards.map((card) => (
        <SingleCard
          card={card}
          key={card.id}
          handleChoice={handleChoice}
          flipped={false}
        />
      ))}
    </>
  );
};

export default CardDeck;
