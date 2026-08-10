import useInView from "../hooks/useInView";

function BuildCTA() {
  const [ctaRef, ctaInView] = useInView({ threshold: 0.15 });

  return (
    <section className='w-full bg-white py-8 sm:py-12 md:py-15'>
      <div className='max-w-[1200px] mx-auto px-4 sm:px-6'>
        <div
          ref={ctaRef}
          className={`flex flex-col items-center gap-8 sm:gap-10 md:gap-12 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] ${ctaInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            background: "#540FCB",
            padding: "40px 20px",
            animation: ctaInView
              ? "scaleIn 0.8s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
          }}>
          {/* Header */}
          <div
            className={`flex flex-col items-center gap-3 sm:gap-4 md:gap-5 max-w-[800px] ${ctaInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: ctaInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            <h2 className='text-center font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[38px] sm:leading-[48px] md:leading-[64px] tracking-[1%]'>
              <span className='text-white'>Have an Idea ?</span>
              <br />
              <span style={{ color: "#FFC77A" }}>Let's build it together.</span>
            </h2>

            <p className='text-center font-semibold text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[28px] md:leading-[30px] tracking-[2%] text-white px-2'>
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
              className='flex items-center gap-[15px] rounded-[15px] px-[20px] py-[10px] font-semibold text-[18px] sm:text-[20px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg w-full sm:w-auto'
              style={{
                background: "#FFC77A",
                color: "#020A23",
                height: "52px",
                justifyContent: "center",
              }}>
              Start your project
              <span>→</span>
            </button>

            <button
              className='flex items-center justify-center rounded-[15px] px-[20px] py-[10px] font-semibold text-[18px] sm:text-[20px] text-white border border-white transition-all duration-300 hover:bg-white/10 w-full sm:w-auto'
              style={{ height: "52px" }}>
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildCTA;
