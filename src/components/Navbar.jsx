// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Rocket } from "lucide-react"
import logo from "../assets/Bloombash Logo.png"

const navLinks = [
  { label: "Services", type: "scroll", target: "services" },
  { label: "About Us", type: "route", target: "/about" },
  { label: "Industries", type: "scroll", target: "industries" },
  { label: "Values", type: "scroll", target: "values" },
  { label: "Contact", type: "route", target: "/contact" },
]

const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const menuToggleRef = useRef(null)
  const menuPanelRef = useRef(null)
  const desktopNavRef = useRef(null)
  const pendingSectionRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const closeMobileMenu = () => {
    if (menuOpen) menuToggleRef.current?.focus()
    setMenuOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  // Track which scroll-section is currently in view (only matters on "/")
  useEffect(() => {
    if (location.pathname !== "/") return

    const scrollTargets = navLinks.filter((link) => link.type === "scroll").map((link) => link.target)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) {
            setActiveSection(id)
          } else {
            // clear only if this section was the active one
            setActiveSection((prev) => (prev === id ? "" : prev))
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    )

    scrollTargets.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return

    const panel = menuPanelRef.current
    const getFocusableElements = () => [...(panel?.querySelectorAll("button:not([disabled])") ?? [])]
    getFocusableElements()[0]?.focus()

    const scrollY = window.scrollY
    const previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    }
    const previousDocumentOverflow = document.documentElement.style.overflow
    document.body.style.position = "fixed"
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = "100%"
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        menuToggleRef.current?.focus()
        setMenuOpen(false)
        return
      }

      if (event.key === "Tab") {
        const focusableElements = getFocusableElements()
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (!firstElement || !lastElement) {
          event.preventDefault()
        } else if (event.shiftKey && (document.activeElement === firstElement || !panel?.contains(document.activeElement))) {
          event.preventDefault()
          lastElement.focus()
        } else if (!event.shiftKey && (document.activeElement === lastElement || !panel?.contains(document.activeElement))) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      Object.assign(document.body.style, previousBodyStyles)
      document.documentElement.style.overflow = previousDocumentOverflow
      window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen || !pendingSectionRef.current) return

    const section = pendingSectionRef.current
    const frame = requestAnimationFrame(() => {
      scrollToSection(section)
      pendingSectionRef.current = null
    })

    return () => cancelAnimationFrame(frame)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const desktopBreakpoint = window.matchMedia("(min-width: 64rem)")
    const handleBreakpointChange = (event) => {
      if (event.matches) {
        desktopNavRef.current?.querySelector("button")?.focus()
        setMenuOpen(false)
      }
    }

    desktopBreakpoint.addEventListener("change", handleBreakpointChange)
    return () => desktopBreakpoint.removeEventListener("change", handleBreakpointChange)
  }, [menuOpen])

  // Scroll to a section after navigating home from another page
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo)
      window.history.replaceState({}, "") // so a refresh doesn't re-scroll
    }
  }, [location])

  const isLinkActive = (link) => {
    if (link.type === "route") return location.pathname === link.target
    return location.pathname === "/" && activeSection === link.target
  }

  const handleNavClick = (link) => {
    if (link.type === "scroll") {
      if (location.pathname === "/") {
        if (menuOpen) {
          pendingSectionRef.current = link.target
          closeMobileMenu()
          return
        }
        scrollToSection(link.target)
      } else {
        navigate("/", { state: { scrollTo: link.target } })
      }
    } else {
      navigate(link.target)
    }
    closeMobileMenu()
  }

  const handleGetStarted = () => {
    navigate("/start-a-project")
    closeMobileMenu()
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-200 p-2">
      <div className="mx-auto flex h-15 max-w-312 items-center justify-between px-4 sm:px-6 md:h-20">
        {/* Logo */}
        <img
          src={logo}
          alt="Bloombash Logo"
          width={183}
          height={40}
          onClick={() => navigate("/")}
          className={`h-8 w-auto cursor-pointer sm:h-10 ${mounted ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: mounted ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}
        />
        {/* Nav Links — desktop */}
        <ul ref={desktopNavRef} className="hidden items-center gap-8 lg:flex xl:gap-8">
          {navLinks.map((link, index) => (
            <li key={link.label} style={{ transitionDelay: mounted ? `${index * 100}ms` : "0ms" }} className={`transition-all duration-700 ease-out motion-reduce:transition-none ${mounted ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
              <button onClick={() => handleNavClick(link)} className={`font-inter cursor-pointer leading-none font-semibold transition-colors xl:text-base ${isLinkActive(link) ? "text-purple-700" : "text-[#020A23] hover:text-purple-700"}`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <button
          onClick={handleGetStarted}
          className={`group relative hidden h-12 w-38 cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-size-[200%_100%] bg-left px-4 text-base font-semibold text-white transition-[background-position] duration-500 hover:bg-right focus-visible:bg-right motion-reduce:transition-none lg:flex xl:text-lg ${mounted ? "anim-visible" : "anim-hidden"}`}
          style={{
            backgroundImage: "linear-gradient(110deg, #472187 0%, #7034D6 50%, #7C3AED 100%)",
            animation: mounted ? "fadeInRight 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
          }}
        >
          <span className="transition-transform duration-300 ease-out group-hover:-translate-x-3 group-focus-visible:-translate-x-3 motion-reduce:transition-none">Get Started</span>
          <span className="absolute top-1/2 right-3 translate-x-[110%] -translate-y-1/2 rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:rotate-0 group-focus-visible:translate-x-0 group-focus-visible:rotate-0 motion-reduce:transition-none">
            <Rocket aria-hidden="true" className="block h-5 w-5" />
          </span>
        </button>

        {/* Hamburger — mobile/tablet */}
        <button ref={menuToggleRef} className="z-50 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.25 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation-menu">
          <span className={`block h-0.5 w-6 rounded bg-[#020A23] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-[#020A23] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 rounded bg-[#020A23] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <button type="button" aria-label="Dismiss menu overlay" aria-hidden="true" tabIndex={-1} className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} onClick={closeMobileMenu} />

      {/* Mobile menu panel */}
      <div ref={menuPanelRef} id="mobile-navigation-menu" aria-hidden={!menuOpen} inert={!menuOpen} className={`fixed inset-y-0 right-0 z-40 flex h-screen w-70 flex-col overflow-y-auto overscroll-contain bg-white px-6 pt-24 pb-8 shadow-2xl transition-transform duration-300 ease-in-out sm:w-80 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`} style={{ height: "100dvh" }}>
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-gray-100">
              <button onClick={() => handleNavClick(link)} className={`w-full cursor-pointer py-3 text-left text-base font-semibold transition-colors ${isLinkActive(link) ? "text-purple-700" : "text-[#020A23] hover:text-purple-700"}`}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleGetStarted}
          className="mt-8 flex h-12 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-[15px] bg-left px-4 text-[18px] font-semibold text-white"
          style={{
            backgroundImage: "linear-gradient(110deg, #472187 0%, #7034D6 50%, #7C3AED 100%)",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar
