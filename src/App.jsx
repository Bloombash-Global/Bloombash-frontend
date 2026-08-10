import "./animations.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeBuild from "./components/WhatWeBuild";
import CoreValues from "./components/CoreValues";
import Industries from "./components/Industries";
import HowWeWork from "./components/HowWeWork";
import BuildCTA from "./components/BuildCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeBuild />
      <CoreValues />
      <Industries />
      <HowWeWork />
      <BuildCTA />
      <Footer />
    </div>
  );
}

export default App;
