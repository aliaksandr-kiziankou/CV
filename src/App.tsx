import { Header } from './components/Header/Header';
import { Courses } from './components/Courses/Courses';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Languages } from './components/Languages/Languages';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Skills />
        <Courses />
        <Portfolio />
        <Languages />
      </main>

      <Footer />
    </>
  );
}

export default App;