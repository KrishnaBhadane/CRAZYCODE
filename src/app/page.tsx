import SocialRail from "@/components/layout/SocialRail";
import ScrollMotion from "@/components/visuals/ScrollMotion";
import StructuredData from "@/components/seo/StructuredData";
import Header   from "@/components/layout/Header";
import Footer   from "@/components/layout/Footer";
import Hero     from "@/components/sections/Hero";
import About    from "@/components/sections/About";
import CrossingStrips from "@/components/visuals/CrossingStrips";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Pricing  from "@/components/sections/Pricing";
import Contact  from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <SocialRail />
      <ScrollMotion />

      <main id="main-content">
        <Hero />
        <div className="page-overlay">
        <About />
        <CrossingStrips />
        <Projects />
        <Services />
        <Pricing />
        <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
