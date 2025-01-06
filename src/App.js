import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import BackToTop from './common/BackToTop';
import BusinessCounter from './components/BusinessCounter';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';

function App() {
  return (
    <>
      <Hero />
      <BusinessCounter />
      <Testimonials />
      <FrequentlyAskedQuestions/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
