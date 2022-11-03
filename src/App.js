import './App.css';
import Header from './Compenants/Header';
import Footer from './Compenants/Footer';
import Accueil from './Page/Accueil';
import Participer from './Page/Participer';
import Faq from './Page/Faq/Faq';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path='/participer' element={<Participer />} />
        <Route path='/faq' element={<Faq />} />

        {/* <Route path="/Contact" element={<Contact />} /> */}

      </Routes>

      <Footer />
    </>
  );
}

export default App;
