// src/components/StartScreen.js
import React, { useState } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

function StartScreen({ onStart }) {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleStart = () => {
    if (selectedTheme && selectedLevel) {
      onStart(selectedTheme, selectedLevel);
    } else {
      alert('Please select both a theme and a level!');
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center py-5">
      <Card className="text-center p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="mb-4">
            Welcome to <br />
            <strong>Emoji Match World</strong>
        </h1>

        <h5 className="mb-4">Choose your emoji theme:</h5>
        <Row className="justify-content-center mb-3">
          <Col xs="auto" className="mb-2">
            <Button
              variant={selectedTheme === 'animals' ? 'primary' : 'outline-primary'}
              size="lg"
              onClick={() => setSelectedTheme('animals')}
            >
              🐶 Animals
            </Button>
          </Col>
          <Col xs="auto" className="mb-2">
            <Button
              variant={selectedTheme === 'food' ? 'primary' : 'outline-primary'}
              size="lg"
              onClick={() => setSelectedTheme('food')}
            >
              🍕 Food
            </Button>
          </Col>
          <Col xs="auto" className="mb-2">
            <Button
              variant={selectedTheme === 'faces' ? 'primary' : 'outline-primary'}
              size="lg"
              onClick={() => setSelectedTheme('faces')}
            >
              😄 Faces
            </Button>
          </Col>
        </Row>

        <h5 className="mb-4">Choose your level:</h5>
        <Row className="justify-content-center mb-1">
          <Col xs="auto" className="mb-2">
            <Button
              variant={selectedLevel === 'easy' ? 'success' : 'outline-success'}
              size="lg"
              onClick={() => setSelectedLevel('easy')}
            >
              Easy
            </Button>
          </Col>
          <Col xs="auto" className="mb-4">
            <Button
              variant={selectedLevel === 'medium' ? 'warning' : 'outline-warning'}
              size="lg"
              onClick={() => setSelectedLevel('medium')}
            >
              Medium
            </Button>
          </Col>
          <Col xs="auto" className="mb-2">
            <Button
              variant={selectedLevel === 'hard' ? 'danger' : 'outline-danger'}
              size="lg"
              onClick={() => setSelectedLevel('hard')}
            >
              Hard
            </Button>
          </Col>
        </Row>

        <Button variant="dark" size="lg" onClick={handleStart}>
          ▶️ Start Game
        </Button>
      </Card>
    </Container>
  );
}

export default StartScreen;
