// src/components/EndScreen.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function EndScreen({ moves, onRestart, theme, level }) {
  return (
    <Container className="text-center mt-5">
      <Card className="p-4 shadow-sm">
        <h1 className="mb-4">🎉 You Win!</h1>

        <p><strong>Theme:</strong> {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
        <p><strong>Level:</strong> {level.charAt(0).toUpperCase() + level.slice(1)}</p>
        <p><strong>Total Moves:</strong> {moves}</p>

        <Button variant="primary" size="lg" onClick={onRestart}>
          🔁 Play Again
        </Button>
      </Card>
    </Container>
  );
}

export default EndScreen;
