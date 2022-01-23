import { FunctionComponent } from "react";
import { Card } from "../types/types";
import SingleCard from "./SingleCard";

interface CardDeckProps {
  cards: Card[];
}

const CardDeck: FunctionComponent<CardDeckProps> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <SingleCard card={card} key={card.id} />
      ))}
    </>
  );
};

export default CardDeck;
