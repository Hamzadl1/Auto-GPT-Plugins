"use client";

import TopBar from "@/components/lp-parents/TopBar";
import Navbar from "@/components/lp-parents/Navbar";
import Hero from "@/components/lp-parents/Hero";
import InstitutionalProof from "@/components/lp-parents/InstitutionalProof";
import ParentTestimonials from "@/components/lp-parents/ParentTestimonials";
import ROISection from "@/components/lp-parents/ROISection";
import ScholarshipSection from "@/components/lp-parents/ScholarshipSection";
import CampusSecurity from "@/components/lp-parents/CampusSecurity";
import Accreditations from "@/components/lp-parents/Accreditations";
import FAQParents from "@/components/lp-parents/FAQParents";
import CTAFinal from "@/components/lp-parents/CTAFinal";
import Footer from "@/components/lp-parents/Footer";
import FloatingCTA from "@/components/lp-parents/FloatingCTA";

export default function ParentsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <InstitutionalProof />
        <ParentTestimonials />
        <ROISection />
        <ScholarshipSection />
        <CampusSecurity />
        <Accreditations />
        <FAQParents />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
