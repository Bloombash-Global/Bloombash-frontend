import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Bloombash Logo.png";

const navLinks = [
  { label: "Services", type: "scroll", target: "services" },
  { label: "AboutUs", type: "route", target: "/about" },
  { label: "Industries", type: "scroll", target: "industries" },
  { label: "Values", type: "scroll", target: "values" },
  { label: "Contact", type: "route", target: "/contact" },
];

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = link => {
    if (link.type === "scroll") {
      if (location.pathname === "/") {
        document
          .getElementById(link.target)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(link.target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(link.target);
    }
    setMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate("/start-a-project");
    setMenuOpen(false);
  };

  return (
    <nav className='w-full bg-[#EAEAF880] relative z-50 top-0 p-2'>
      <div className='flex items-center justify-between mx-auto max-w-312 h-[60px] md:h-[80px]   px-4 sm:px-6'>
        {/* Logo */}
        <img
          src={logo}
          alt='Bloombash Logo'
          className={`h-8 sm:h-10 ${mounted ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: mounted
              ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
          }}
        />

        {/* Nav Links — desktop */}
        <ul className='hidden lg:flex items-center gap-8 xl:gap-[54px]'>
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`cursor-pointer font-semibold text-base xl:text-[18px] text-[#020A23] leading-none font-inter hover:text-purple-700 transition-colors ${mounted ? "anim-visible" : "anim-hidden"}`}
              style={{
                animation: mounted
                  ? `fadeInDown 0.6s cubic-bezier(0.22,1,0.36,1) ${0.1 + index * 0.08}s both`
                  : "none",
              }}>
              {link.label}
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <button
          onClick={handleGetStarted}
          className={`hidden lg:block w-[160px] xl:w-[180px] h-[50px] xl:h-[60px] rounded-[15px] text-white font-semibold text-base xl:text-[18px] cursor-pointer hover:opacity-90 transition-opacity ${mounted ? "anim-visible" : "anim-hidden"}`}
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
            animation: mounted
              ? "fadeInRight 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
              : "none",
          }}>
          Get Started
        </button>

        {/* Hamburger — mobile/tablet */}
        <button
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer z-50'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'>
          <span
            className={`block w-6 h-[2.5px] bg-[#020A23] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#020A23] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2.5px] bg-[#020A23] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-40 flex flex-col pt-24 pb-8 px-6 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className='flex flex-col gap-2'>
          {navLinks.map(link => (
            <li
              key={link.label}
              className='cursor-pointer font-semibold text-[18px] text-[#020A23] py-3 border-b border-gray-100 hover:text-purple-700 transition-colors'
              onClick={() => handleNavClick(link)}>
              {link.label}
            </li>
          ))}
        </ul>

        <button
          onClick={handleGetStarted}
          className='mt-8 w-full h-[55px] rounded-[15px] text-white font-semibold text-[18px] cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
          }}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
