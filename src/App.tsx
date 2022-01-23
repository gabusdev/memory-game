import { useEffect, useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import { Card } from "./types/types";

const cardImage = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a Choice
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // Check if cards are iquals
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceTwo.src === choiceOne.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            return card.src === choiceOne.src
              ? ({ ...card, matched: true } as Card)
              : card;
          });
        });
      }
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className='App'>
      <h1>Memmory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        <CardDeck cards={cards} handleChoice={handleChoice} />
      </div>
    </div>
  );
}

export default App;
