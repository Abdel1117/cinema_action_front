import './App.css';
import Header from './Compenants/Header';
import Footer from './Compenants/Footer';
import Accueil from './Page/Accueil';
import Participer from './Page/Participer';
import Faq from './Page/Faq';
import About from './Page/A_Propos';
import Connexion from './Page/Connexion';
import A_VENIR from './Page/A_Venir';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inscription from './Page/Inscription';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path='/participer' element={<Participer />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/a_venir' element={<A_VENIR />} />

        {/* <Route path="/Contact" element={<Contact />} /> */}

      </Routes>

      <Footer />
    </>
  );
}

export default App;
