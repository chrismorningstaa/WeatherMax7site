import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <Navbar />
      <Hero />
      <ValueProps />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <UseCases />
      <ContactSection />
      <Footer />
    </main>
  );
}
