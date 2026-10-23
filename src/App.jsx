import "./animations.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopBtn from "./components/ScrollTopBtn";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const StartProject = lazy(() => import("./pages/StartProject"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
        <ScrollTopBtn />
        <Navbar />
        <Suspense fallback={<div className='min-h-screen' aria-busy='true' />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/start-a-project' element={<StartProject />} />
            <Route path='/services/:slug' element={<ServiceDetail />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
