import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom"
import './App.css';
import Header from './Compenants/Header';
import Footer from './Compenants/Footer';
import Accueil from './Page/Accueil';
import Participer from './Page/Participer';
import Faq from './Page/Faq';
import About from './Page/A_Propos';
import Connexion from './Page/Connexion';
import A_VENIR from './Page/A_Venir';
import Inscription from './Page/Inscription';

const TITLES = {
  '/': 'Ciné Action Festival · Courts métrages d\'action',
  '/participer': 'Participer · Ciné Action Festival',
  '/faq': 'Questions fréquentes · Ciné Action Festival',
  '/about': 'Le festival · Ciné Action Festival',
  '/inscription': 'Inscription · Ciné Action Festival',
  '/connexion': 'Connexion · Ciné Action Festival',
  '/a_venir': 'Contact · Ciné Action Festival',
  '/mentions-legales': 'Mentions légales · Ciné Action Festival',
  '/confidentialite': 'Politique de confidentialité · Ciné Action Festival',
  '/mot-de-passe-oublie': 'Mot de passe oublié · Ciné Action Festival',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || 'Page introuvable · Ciné Action Festival';
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  return (
    <main id="contenu" className="wrap py-24 lg:py-36">
      <h1 className="display text-[clamp(4rem,14vw,12rem)]">Coupez !</h1>
      <p className="mt-6 max-w-prose text-xl leading-relaxed text-mute">
        Cette page n'existe pas, ou elle a été déplacée.
      </p>
      <Link to="/" className="btn-primary mt-10">
        Retour à l'accueil
      </Link>
    </main>
  );
}

function App() {
  return (
    <>
      <RouteEffects />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path='/participer' element={<Participer />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/a_venir' element={<A_VENIR />} />
        <Route
          path='/mentions-legales'
          element={<A_VENIR title="Mentions légales" lead="Cette page est en cours de rédaction. Pour toute question, retrouvez le festival sur les réseaux." />}
        />
        <Route
          path='/confidentialite'
          element={<A_VENIR title="Confidentialité" lead="Notre politique de confidentialité est en cours de rédaction. Pour toute question sur vos données, contactez-nous sur les réseaux." />}
        />
        <Route
          path='/mot-de-passe-oublie'
          element={<A_VENIR title="Mot de passe oublié" lead="La réinitialisation en ligne arrive bientôt. En attendant, écrivez-nous sur les réseaux pour retrouver l'accès à votre compte." />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
