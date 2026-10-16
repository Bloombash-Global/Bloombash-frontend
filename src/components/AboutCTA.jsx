// src/components/AboutCTA.jsx
import { useNavigate } from "react-router-dom";
import useInView from "../hooks/useInView";

const AboutCTA = () => {
  const navigate = useNavigate();
  const [sectionRef, isInView] = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  const visible = isInView ? "anim-visible" : "";

  return (
    <section
      ref={sectionRef}
      className='w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex items-center justify-center text-center'
      style={{
        background: "linear-gradient(90deg, #3B0F91 0%, #6D28D9 100%)",
      }}>
      <div className='w-full max-w-3xl flex flex-col items-center gap-4 sm:gap-6'>
        <h2
          className={`font-inter font-extrabold text-2xl sm:text-4xl md:text-5xl text-white leading-tight anim-hidden anim-fade-up ${visible}`}>
          Let's Turn Your Idea Into{" "}
          <span className='text-[#FFC77A]'>Reality.</span>
        </h2>

        <p
          className={`font-Inter font-bold text-sm sm:text-xl text-white/80 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
          Whether you're a startup founder, enterprise, or dreamer with a napkin
          sketch - we're ready to build with you.
        </p>

        <div
          className={`w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 anim-hidden anim-fade-up ${visible} anim-delay-3`}>
          <button
            onClick={() => navigate("/start-a-project")}
            className='w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFC77A] text-[#1A0B33] font-inter font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity cursor-pointer'>
            Start your project
            <span>→</span>
          </button>

          <button
            onClick={() => navigate("/contact")}
            className='w-full sm:w-auto bg-transparent border border-white/40 text-white font-inter font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
