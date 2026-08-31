import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Events } from './components/Events';
import { Venue } from './components/Venue';
import { DressCode } from './components/DressCode';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Venue />
        <DressCode />
        <Gallery />
        <FAQ />
        <RSVP />
      </main>
      <Footer />
    </>
  );
}

export default App;
