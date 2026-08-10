import { useEffect, useState } from "react";
import playBtn from "../assets/Play button.png";

const stats = [
  {
    value: (
      <>
        7<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Service Verticals",
  },
  {
    value: (
      <>
        5<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Industries served",
  },
  { value: "∞", label: "Ideas Possible" },
  {
    value: (
      <>
        1<span className='text-[#7C3AED] text-[20px] sm:text-[28px] align-top'>st</span>
      </>
    ),
    label: "Step: Your Idea",
  },
];

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full bg-[#DEDDFF] flex flex-col items-center text-center min-h-[auto] md:min-h-[891px] pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-5 px-4 sm:px-6'>
      {/* Badge */}
      <div
        className={`flex items-center gap-2 sm:gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-[10px] ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
            : "none",
        }}>
        <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />

        <span className='uppercase text-[11px] sm:text-[13px] md:text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
          Innovation-Driven Tech Company
        </span>
      </div>

      {/* Heading */}
      <h1
        className={`mt-6 sm:mt-8 md:mt-10 max-w-[1013px] text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] leading-[44px] sm:leading-[64px] md:leading-[80px] lg:leading-[96px] font-bold text-[#150734] ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.25s both"
            : "none",
        }}>
        Bringing{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#C9A96E 0%,#6B4DA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Ideas to Life,
        </span>
        <br />
        Nations, and the World
      </h1>

      {/* Description */}
      <p
        className={`mt-4 sm:mt-6 md:mt-8 max-w-[720px] text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] md:leading-[32px] font-medium text-[#150734] ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both"
            : "none",
        }}>
        We partner with dreamers, disruptors, and visionaries, regardless of
        background or resources to turn imagination into scalable,
        technology-driven innovation.
      </p>

      {/* Buttons */}
      <div
        className={`mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto ${mounted ? "anim-visible" : "anim-hidden"}`}
        style={{
          animation: mounted
            ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s both"
            : "none",
        }}>
        <button
          className='w-full sm:w-[220px] md:w-[240px] h-[52px] sm:h-[56px] md:h-[60px] rounded-[15px] text-white text-[18px] sm:text-[20px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'
          style={{
            background: "linear-gradient(95.25deg,#472187 3%,#7C3AED 100%)",
          }}>
          Start a Project
        </button>

        <button className='w-full sm:w-[220px] md:w-[240px] h-[52px] sm:h-[56px] md:h-[60px] rounded-[15px] border-2 border-[#87848B] flex items-center justify-center gap-3 text-[18px] sm:text-[20px] font-semibold text-[#150734] transition-all duration-300 hover:bg-white/30'>
          <img src={playBtn} alt='Play' className='w-4 h-4 sm:w-5 sm:h-5' />
          Watch Our Story
        </button>
      </div>

      {/* Stats */}
      <div className='mt-12 sm:mt-16 md:mt-24 grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-10 md:gap-16'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${mounted ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: mounted
                ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.75 + index * 0.12}s both`
                : "none",
            }}>
            <h3
              className={`font-bold text-center ${
                stat.value === "∞"
                  ? "text-[32px] sm:text-[38px] md:text-[42px]"
                  : "text-[28px] sm:text-[32px] md:text-[36px]"
              } text-[#150734]`}>
              {stat.value}
            </h3>

            <p className='mt-1 sm:mt-2 text-[12px] sm:text-[14px] md:text-[15px] font-medium text-[#150734] whitespace-nowrap'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
