"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStats from "@/components/ProofStats";
import WhatIBuild from "@/components/WhatIBuild";
import FeaturedClient from "@/components/FeaturedClient";
import Products from "@/components/Products";
import Automation from "@/components/Automation";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

export default function PortfolioContent() {
  const [introDone, setIntroDone] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [bgReady, setBgReady] = useState(false);

  const handleIntroFinish = useCallback(() => {
    setIntroDone(true);
    // Trigger content fade-in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setContentVisible(true));
    });
  }, []);

  // Start 3D background after mount
  useEffect(() => {
    setBgReady(true);
  }, []);

  return (
    <>
      {/* 3D Background — renders immediately beneath everything */}
      {bgReady && <Background3D />}

      {/* Intro overlay */}
      {!introDone && <IntroScreen onFinish={handleIntroFinish} />}

      {/* Main content */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main id="main">
          <Hero />
          <ProofStats />
          <WhatIBuild />
          <FeaturedClient />
          <Products />
          <Automation />
          <Portfolio />
          <Services />
          <About />
          <CurrentlyBuilding />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
