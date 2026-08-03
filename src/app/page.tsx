import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FragranceFinder from '../components/FragranceFinder';
import CookwareShowcase from '../components/CookwareShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import WholesaleForm from '../components/WholesaleForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Hero />
      <FragranceFinder />
      <CookwareShowcase />
      <WhyChooseUs />
      <WholesaleForm />
      <Footer />
    </main>
  );
}
