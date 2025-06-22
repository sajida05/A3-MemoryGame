import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './GameBoard.css';

const EMOJI_THEMES = {
  animals: ['🐶', '🐱', '🐰', '🐵', '🦊', '🐼', '🐸', '🐯'],
  food: ['🍕', '🍔', '🍟', '🌮', '🍎', '🍇', '🍓', '🥑'],
  faces: ['😄', '😎', '😭', '😡', '🤓', '😴', '🥳', '😱']
};

const LEVEL_SIZES = {
  easy: 4,
  medium: 6,
  hard: 8
};

function GameBoard({ theme, level, onGameOver, onBack }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    const baseEmojis = EMOJI_THEMES[theme].slice(0, LEVEL_SIZES[level]);
    const pairs = [...baseEmojis, ...baseEmojis];
    const shuffled = pairs.sort(() => 0.5 - Math.random());

    const cardObjects = shuffled.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false
    }));

    setCards(cardObjects);
  }, [theme, level]);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || cards[index].matched) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const nextMoves = moves + 1;
      setMoves(nextMoves);

      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        const newMatched = [...matched, first, second];
        setMatched(newMatched);

        if (newMatched.length === cards.length) {
          setTimeout(() => onGameOver(nextMoves), 600);
        }
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <Container className="text-center mt-5">
      <h2>🧠 Match the Emojis!</h2>
      <p>Moves: {moves}</p>

      <Button variant="outline-primary" className="mb-3" onClick={onBack}>
        Back to Start
      </Button>

      <Row className="justify-content-center">
        {cards.map((card, index) => (
          <Col key={card.id} xs={3} className="mb-3">
            <Card
              className="emoji-card"
              onClick={() => handleCardClick(index)}
              bg={matched.includes(index) ? 'success' : 'light'}
            >
         <Card.Body className={`emoji-box ${flipped.includes(index) || matched.includes(index) ? 'flipped' : ''}`}>
          <div className="emoji-back">❓</div>
          <div className="emoji-face">{card.emoji}</div>
          </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GameBoard;
