import { useNavigate } from "react-router-dom";
import useInView from "../hooks/useInView";

function BuildCTA() {
  const navigate = useNavigate();
  const [ctaRef, ctaInView] = useInView({ threshold: 0.15 });

  return (
    <section className='w-full bg-white py-8 sm:py-12 md:py-15'>
      <div className='max-w-300 mx-auto px-4 sm:px-6'>
        <div
          ref={ctaRef}
          className={`flex flex-col items-center gap-8 sm:gap-10 md:gap-12 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] bg-[#540FCB] py-10 px-5 ${ctaInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: ctaInView
              ? "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
          }}>
          {/* Header */}
          <div
            className={`flex flex-col items-center gap-3 sm:gap-4 md:gap-5 max-w-200 ${ctaInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: ctaInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            <h2 className='text-center font-semibold text-[28px] sm:text-4xl md:text-[44px] lg:text-5xl leading-9.5 sm:leading-12 md:leading-16 tracking-[1%]'>
              <span className='text-white'>Have an Idea ?</span>
              <br />
              <span className='text-[#FFC77A]'>Let's build it together.</span>
            </h2>

            <p className='text-center font-semibold text-sm sm:text-[15px] md:text-base leading-6 sm:leading-7 md:leading-7.5 tracking-[2%] text-white px-2'>
              Whether you're a founder with a bold vision or an enterprise ready
              for transformation — we're ready when you are.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full px-4 sm:px-0 sm:w-auto ${ctaInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: ctaInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.45s both"
                : "none",
            }}>
            <button
              onClick={() => navigate("/start-a-project")}
              className='flex items-center justify-center gap-3.75 rounded-[15px] px-5 py-2.5 font-semibold text-lg sm:text-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer w-full sm:w-auto h-13 bg-[#FFC77A] text-[#020A23]'>
              Start your project
              <span>→</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className='flex items-center justify-center rounded-[15px] px-5 py-2.5 font-semibold text-lg sm:text-xl text-white border border-white transition-all duration-300 hover:bg-white/10 w-full sm:w-auto h-13 cursor-pointer'>
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildCTA;
