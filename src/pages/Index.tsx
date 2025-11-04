import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import WhySelfHost from '@/components/WhySelfHost';
import Timeline from '@/components/Timeline';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <WhySelfHost />
        <Timeline />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
