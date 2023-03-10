"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Clients from "./components/References";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <NavBar />
        <LandingPage />
        <Features />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
