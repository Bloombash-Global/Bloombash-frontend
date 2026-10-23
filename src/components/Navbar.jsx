// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Bloombash Logo.png";

const navLinks = [
  { label: "Services", type: "scroll", target: "services" },
  { label: "About Us", type: "route", target: "/about" },
  { label: "Industries", type: "scroll", target: "industries" },
  { label: "Values", type: "scroll", target: "values" },
  { label: "Contact", type: "route", target: "/contact" },
];

const scrollToSection = id =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuToggleRef = useRef(null);
  const menuPanelRef = useRef(null);
  const desktopNavRef = useRef(null);
  const pendingSectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMobileMenu = () => {
    if (menuOpen) menuToggleRef.current?.focus();
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Track which scroll-section is currently in view (only matters on "/")
  useEffect(() => {
    if (location.pathname !== "/") return;

    const scrollTargets = navLinks
      .filter(link => link.type === "scroll")
      .map(link => link.target);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
          } else {
            // clear only if this section was the active one
            setActiveSection(prev => (prev === id ? "" : prev));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    scrollTargets.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const panel = menuPanelRef.current;
    const getFocusableElements = () =>
      [...(panel?.querySelectorAll("button:not([disabled])") ?? [])];
    getFocusableElements()[0]?.focus();

    const scrollY = window.scrollY;
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        menuToggleRef.current?.focus();
        setMenuOpen(false);
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
          event.preventDefault();
        } else if (
          event.shiftKey &&
          (document.activeElement === firstElement ||
            !panel?.contains(document.activeElement))
        ) {
          event.preventDefault();
          lastElement.focus();
        } else if (
          !event.shiftKey &&
          (document.activeElement === lastElement ||
            !panel?.contains(document.activeElement))
        ) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      Object.assign(document.body.style, previousBodyStyles);
      document.documentElement.style.overflow = previousDocumentOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || !pendingSectionRef.current) return;

    const section = pendingSectionRef.current;
    const frame = requestAnimationFrame(() => {
      scrollToSection(section);
      pendingSectionRef.current = null;
    });

    return () => cancelAnimationFrame(frame);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const desktopBreakpoint = window.matchMedia("(min-width: 64rem)");
    const handleBreakpointChange = event => {
      if (event.matches) {
        desktopNavRef.current?.querySelector("button")?.focus();
        setMenuOpen(false);
      }
    };

    desktopBreakpoint.addEventListener("change", handleBreakpointChange);
    return () =>
      desktopBreakpoint.removeEventListener("change", handleBreakpointChange);
  }, [menuOpen]);

  // Scroll to a section after navigating home from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
      window.history.replaceState({}, ""); // so a refresh doesn't re-scroll
    }
  }, [location]);

  const isLinkActive = link => {
    if (link.type === "route") return location.pathname === link.target;
    return location.pathname === "/" && activeSection === link.target;
  };

  const handleNavClick = link => {
    if (link.type === "scroll") {
      if (location.pathname === "/") {
        if (menuOpen) {
          pendingSectionRef.current = link.target;
          closeMobileMenu();
          return;
        }
        scrollToSection(link.target);
      } else {
        navigate("/", { state: { scrollTo: link.target } });
      }
    } else {
      navigate(link.target);
    }
    closeMobileMenu();
  };

  const handleGetStarted = () => {
    navigate("/start-a-project");
    closeMobileMenu();
  };

  return (
    <nav className='w-full bg-[#EAEAF880] relative z-50 top-0 p-2'>
      <div className='flex items-center justify-between mx-auto max-w-312 h-15 md:h-20 px-4 sm:px-6'>
        {/* Logo */}
        <img
          src={logo}
          alt='Bloombash Logo'
          width={183}
          height={40}
          onClick={() => navigate("/")}
          className={`h-8 sm:h-10 w-auto cursor-pointer ${
            mounted ? "anim-visible" : "anim-hidden"
          }`}
          style={{
            animation: mounted
              ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
          }}
        />
        {/* Nav Links — desktop */}
        <ul
          ref={desktopNavRef}
          className='hidden lg:flex items-center gap-8 xl:gap-8'>
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className={mounted ? "anim-visible" : "anim-hidden"}
              style={{
                animation: mounted
                  ? `fadeInDown 0.6s cubic-bezier(0.22,1,0.36,1) ${
                      0.1 + index * 0.08
                    }s both`
                  : "none",
              }}>
              <button
                onClick={() => handleNavClick(link)}
                className={`cursor-pointer font-semibold xl:text-base leading-none font-inter transition-colors ${
                  isLinkActive(link)
                    ? "text-purple-700"
                    : "text-[#020A23] hover:text-purple-700"
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <button
          onClick={handleGetStarted}
          className={`hidden lg:block px-4 py-2.5 rounded-2xl text-white font-semibold text-base xl:text-lg cursor-pointer hover:opacity-90 transition-opacity ${
            mounted ? "anim-visible" : "anim-hidden"
          }`}
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
          ref={menuToggleRef}
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.25 cursor-pointer z-50'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls='mobile-navigation-menu'>
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#020A23] rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <button
        type='button'
        aria-label='Dismiss menu overlay'
        aria-hidden='true'
        tabIndex={-1}
        className={`lg:hidden fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile menu panel */}
      <div
        ref={menuPanelRef}
        id='mobile-navigation-menu'
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`lg:hidden fixed inset-y-0 right-0 h-screen w-70 sm:w-80 bg-white shadow-2xl z-40 flex flex-col overflow-y-auto overscroll-contain pt-24 pb-8 px-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "100dvh" }}>
        <ul className='flex flex-col gap-2'>
          {navLinks.map(link => (
            <li key={link.label} className='border-b border-gray-100'>
              <button
                onClick={() => handleNavClick(link)}
                className={`w-full text-left cursor-pointer font-semibold text-base py-3 transition-colors ${
                  isLinkActive(link)
                    ? "text-purple-700"
                    : "text-[#020A23] hover:text-purple-700"
                }`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleGetStarted}
          className='mt-8 w-full px-4 py-3 rounded-[15px] text-white font-semibold text-[18px] cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
          }}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
