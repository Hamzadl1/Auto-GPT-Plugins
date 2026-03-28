import TopBar from "./components/lp-bacheliers/TopBar";
import Navbar from "./components/lp-bacheliers/Navbar";
import Hero from "./components/lp-bacheliers/Hero";
import VisualGallery from "./components/lp-bacheliers/VisualGallery";
import StudentTestimonials from "./components/lp-bacheliers/StudentTestimonials";
import ExchangeSection from "./components/lp-bacheliers/ExchangeSection";
import Programs from "./components/lp-bacheliers/Programs";
import CampusLife from "./components/lp-bacheliers/CampusLife";
import StatsBar from "./components/lp-bacheliers/StatsBar";
import FAQStudents from "./components/lp-bacheliers/FAQStudents";
import CTAFinal from "./components/lp-bacheliers/CTAFinal";
import Footer from "./components/lp-bacheliers/Footer";
import FloatingCTA from "./components/lp-bacheliers/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <VisualGallery />
      <StudentTestimonials />
      <ExchangeSection />
      <Programs />
      <CampusLife />
      <StatsBar />
      <FAQStudents />
      <CTAFinal />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
