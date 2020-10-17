import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from 'pages/Home';
import History from 'pages/History';
import './styles/App.css';

function App() {
  return (

      <Router>
        <Header />
        <main>
          <Container fluid>
            <Route path='/' component={Home} exact />
            <Route path='/history' component={History} exact />
          </Container>
        </main>
      </Router>

  );
}

export default App;
