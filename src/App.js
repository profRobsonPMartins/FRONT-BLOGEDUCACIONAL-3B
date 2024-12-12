import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Conteúdo
import Header from './components/Header/Header';
import AssuntosDestaque from './components/Assuntos/AssuntosDestaque';
import CardsEducacionais from './components/Cards/CardsEducacionais'; // Cards => Pages/matematica...
import LatestBlogs from './components/Latest/LatestBlogs';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

// Pages
import Hero from './pages/Hero';
// Conteúdos dos cards
import MathContent from './pages/MathContent';
import PhysicsContent from './pages/PhysicsContent';
import ChemistryContent from './pages/ChemistryContent';
import HistoryContent from './pages/HistoryContent';
import GeographyContent from './pages/GeographyContent';
import BiologyContent from './pages/BiologyContent';
import LiteratureContent from './pages/LiteratureContent';
import SociologyContent from './pages/SociologyContent';
import PhilosophyContent from './pages/PhilosophyContent';
import EducacaoFisicaContent from './pages/EducacaoFisicaContent';
import ArtesContent from './pages/ArtesContent';
import InglesContent from './pages/InglesContent';

// Eventos fora da escola
import CareerFair from './pages/CareerFair';
import MarineDay from './pages/MarineDay';
import OceanographyVisit from './pages/OceanographyVisit';

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
        <Route path='/educacao-fisica' element={<EducacaoFisicaContent />}/>
        <Route path='/artes' element={<ArtesContent />}/>
        <Route path='/ingles' element={<InglesContent/>}/>

        <Route path='/oceanography-visit' element={<OceanographyVisit />} />
        <Route path='/marine-day' element={<MarineDay />} />
        <Route path='/career-fair' element={<CareerFair />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
