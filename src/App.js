import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Conteúdo
import CardsEducacionais from './components/Cards/CardsEducacionais';
import Contact from './components/Contact/Contact';

// Pages
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
             <Hero />
             <CardsEducacionais />
             <Contact />
          </>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
