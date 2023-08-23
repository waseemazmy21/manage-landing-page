import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

const App = () => {
  return (
    <div className='text-veryDarkBlue'>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;
