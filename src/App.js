import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <Main className='py-3'>
        <Container>
          <h1>hola</h1>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
