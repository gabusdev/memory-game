import { useState } from "react";
import "./App.css";
import CardDeck from "./components/CardDeck";
import { Card } from "./types/types";

const cardImage = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className='App'>
      <h1>Memmory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        <CardDeck cards={cards} />
      </div>
    </div>
  );
}

export default App;
