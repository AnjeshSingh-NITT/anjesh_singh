import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-8 pt-32 pb-20 md:ml-20 lg:ml-auto">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;