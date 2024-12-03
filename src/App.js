import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Conteúdo
import Header from './components/Header/Header';
import AssuntosDestaque from './components/Assuntos/AssuntosDestaque';
import CardsEducacionais from './components/Cards/CardsEducacionais';
import LatestBlogs from './components/Latest/LatestBlogs';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

// Pages
import Hero from './pages/Hero';
import MathContent from './pages/MathContent';
import PhysicsContent from './pages/PhysicsContent';
import ChemistryContent from './pages/ChemistryContent';
import HistoryContent from './pages/HistoryContent';
import GeographyContent from './pages/GeographyContent';
import BiologyContent from './pages/BiologyContent';
import LiteratureContent from './pages/LiteratureContent';
import SociologyContent from './pages/SociologyContent';
import PhilosophyContent from './pages/PhilosophyContent';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <AssuntosDestaque />
            <CardsEducacionais />
            <LatestBlogs />
            <Contact />
            <Testimonials />
          </>
        } />
        <Route path='/matematica' element={<MathContent />} />
        <Route path='/fisica' element={<PhysicsContent />} />
        <Route path='/quimica' element={<ChemistryContent />} />
        <Route path='/historia' element={<HistoryContent />} />
        <Route path='/geografia' element={<GeographyContent />} />
        <Route path='/biologia' element={<BiologyContent />} />
        <Route path='/literatura' element={<LiteratureContent />} />
        <Route path='/sociologia' element={<SociologyContent />} />
        <Route path='/filosofia' element={<PhilosophyContent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
