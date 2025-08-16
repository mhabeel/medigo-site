import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './styles/header.css';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
