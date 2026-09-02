import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Sectors from "@/components/Sectors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Expertise />
      <Experience />
      <Sectors />
      <Contact />
      <Footer />
    </main>
  );
}