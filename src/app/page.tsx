import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import SpaceSection from '@/components/SpaceSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <SpaceSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
