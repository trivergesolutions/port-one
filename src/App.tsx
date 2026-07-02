import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import splashVideo from './assets/splash.mp4';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c368d] to-[#030c22]">

          <div className="w-full max-w-3xl px-4 ">
            <video
              className="w-full h-full rounded-xl shadow-[0_0_80px_rgba(7,36,96,0.5)] border border-white/5"
              src={splashVideo}
              autoPlay
              muted
              playsInline
              onEnded={() => setShowSplash(false)}
            />
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-white">
          <Navigation />
          <Hero />
          <Projects />
          <Services />
          <TechStack />
          <Team />
          <WhyChooseUs />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
