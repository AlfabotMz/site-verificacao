import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Legal from './components/Legal';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import PlatformData from './components/PlatformData';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Legal />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/platform-data" element={<PlatformData />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
