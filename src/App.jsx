import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className='text-veryDarkBlue'>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
};

export default App;
