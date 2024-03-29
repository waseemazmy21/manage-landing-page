import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='text-veryDarkBlue'>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
