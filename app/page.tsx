import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Founders from "./components/Founders";
import Compliance from "./components/Compliance";
import MarketStats from "./components/MarketStats";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Founders />
        <Compliance />
        <MarketStats />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
