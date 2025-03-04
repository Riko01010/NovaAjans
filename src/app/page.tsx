import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
// import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import BlogPreviewSection from '../components/BlogPreviewSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogPreviewSection />
        {/* <PortfolioSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
