import { useEffect, useState } from "react"
import playBtn from "../assets/Play button.png"
import heroBackground from "../assets/Hero_Background.png"
import { useNavigate } from "react-router-dom"

const stats = [
  {
    value: (
      <>
        7<span className="text-[#7C3AED]">+</span>
      </>
    ),
    label: "Service Verticals",
  },
  {
    value: (
      <>
        5<span className="text-[#7C3AED]">+</span>
      </>
    ),
    label: "Industries served",
  },
  { value: "∞", label: "Ideas Possible" },
  {
    value: (
      <>
        1<span className="align-top text-xl text-[#7C3AED] sm:text-3xl">st</span>
      </>
    ),
    label: "Step: Your Idea",
  },
]

const Hero = () => {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="md:min-h2 relative mt-10 flex w-full flex-col items-center overflow-hidden border-amber-50 px-6 pt-28 pb-12 text-center sm:px-8 sm:pt-30 md:pt-32 md:pb-10">
      <div
        aria-hidden="true"
        className="hero-background-pan absolute inset-[-6%] z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 8, 20, 0.45), rgba(10, 8, 20, 0.45)), url(${heroBackground})`,
        }}
      />
      {/* Badge */}
      <div
        className={`relative z-10 flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both" : "none",
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] sm:h-2 sm:w-2" />

        <span className="text-xs font-extrabold tracking-wider text-white uppercase sm:text-sm md:text-base">Innovation-Driven Tech Company</span>
      </div>

      {/* Heading */}
      <h1
        className={`relative z-10 mt-6 max-w-5xl text-4xl leading-tight font-bold tracking-tight text-white sm:mt-8 sm:text-5xl md:mt-10 md:text-6xl lg:text-7xl ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted ? "fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s both" : "none",
        }}
      >
        Bringing{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#C9A96E 0%,#6B4DA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ideas to Life,
        </span>
        <br />
        Nations, and the World
      </h1>

      {/* Description */}
      <p
        className={`relative z-10 mt-4 max-w-180 text-base leading-relaxed font-medium text-white sm:mt-6 md:mt-8 md:text-lg ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both" : "none",
        }}
      >
        We partner with dreamers, disruptors, and visionaries, regardless of background or resources to turn imagination into scalable, technology-driven innovation.
      </p>

      {/* Buttons */}
      <div
        className={`relative z-10 mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-5 md:mt-12 ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both" : "none",
        }}
      >
        <button
          onClick={() => navigate("/start-a-project")}
          className="h-13 w-full cursor-pointer rounded-2xl text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-14 sm:w-55 sm:text-xl md:h-15 md:w-60"
          style={{
            background: "linear-gradient(95.25deg,#472187 3%,#7C3AED 100%)",
          }}
        >
          Start a Project
        </button>

        <button className="flex h-13 w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white/70 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/15 sm:h-14 sm:w-55 sm:text-xl md:h-15 md:w-60">
          <img src={playBtn} alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert sm:h-5 sm:w-5" />
          Watch Our Story
        </button>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-10 grid grid-cols-2 gap-6 sm:mt-16 sm:flex sm:items-center sm:gap-10 md:mt-15 md:gap-16">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center ${mounted ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: mounted ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.75 + index * 0.12}s both` : "none",
            }}
          >
            <p className={`text-center font-bold text-white ${stat.value === "∞" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>{stat.value}</p>

            <p className="mt-1 text-xs font-medium whitespace-nowrap text-white sm:mt-2 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
