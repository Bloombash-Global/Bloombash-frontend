import useInView from "../hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We deeply understand your idea, audience, and goals through strategic workshops.",
    badgeColor: "purple",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft intuitive interfaces and validated prototypes that align with your users.",
    badgeColor: "orange",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers build robust, scalable systems using modern, future-ready stacks.",
    badgeColor: "purple",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy, optimize, and provide ongoing support to scale your product.",
    badgeColor: "orange",
  },
];

function HowWeWork() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });

  return (
    <section className='w-full bg-white py-12 sm:py-16 md:py-22.5'>
      <div className='max-w-327 mx-auto px-4 sm:px-6'>
        {/* Header */}
        <div ref={headerRef} className='flex flex-col items-center'>
          {/* Badge */}
          <div
            className={`flex items-center gap-2 sm:gap-2.75 rounded-full border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-2.5 ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-[#420C9F]'>
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`mt-5 sm:mt-6 md:mt-8 text-center text-3xl sm:text-4xl md:text-5xl leading-9 sm:leading-11 md:leading-14 font-bold text-[#020A23] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            A proven path{" "}
            <span className='text-[#7C3AED]'>from Idea to Impact</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-3 sm:mt-4 md:mt-5 max-w-177 text-center text-sm sm:text-lg md:text-lg leading-relaxed font-medium text-[#020A23CC] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            Our collaborative four-step process ensures clarity, transparency,
            and results — every step of the way.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on lg+ */}
        <div ref={stepsRef} className='mt-10 sm:mt-14 md:mt-20 relative'>
          {/* Desktop: horizontal layout with connector (lg+) */}
          <div className='hidden lg:flex items-start justify-between relative'>
            {/* Dotted connector line */}
            <div
              className={`absolute top-11 left-45 right-45 h-0.5 z-0 ${stepsInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
                animation: stepsInView
                  ? "growWidth 1s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : "none",
                transformOrigin: "left center",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-center text-center relative w-75.75 z-10 ${stepsInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  animation: stepsInView
                    ? `fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) ${0.3 + index * 0.15}s both`
                    : "none",
                }}>
                {/* Circular Badge */}
                <div
                  className='w-22.5 h-22.5 rounded-full flex items-center justify-center shadow-lg relative z-10'
                  style={
                    step.badgeColor === "purple"
                      ? {
                          background:
                            "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
                        }
                      : { background: "#FFC77A" }
                  }>
                  <span
                    className='font-medium text-3xl leading-tight'
                    style={{
                      color:
                        step.badgeColor === "purple" ? "#FFFFFF" : "#020A23",
                    }}>
                    {step.number}
                  </span>
                </div>
                <h3 className='mt-6 font-semibold text-xl leading-relaxed tracking-wide text-black'>
                  {step.title}
                </h3>
                <p className='mt-3 font-medium text-base leading-relaxed tracking-wide text-[#605F62]'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          {/* Mobile/Tablet: vertical layout with vertical connector */}
          <div className='lg:hidden flex flex-col items-center gap-0'>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-150 py-4 relative z-10 ${stepsInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  animation: stepsInView
                    ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.2 + index * 0.12}s both`
                    : "none",
                }}>
                {/* Circular Badge */}
                <div
                  className='w-17.5 h-17.5 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg shrink-0 relative z-10'
                  style={
                    step.badgeColor === "purple"
                      ? {
                          background:
                            "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
                        }
                      : { background: "#FFC77A" }
                  }>
                  <span
                    className='font-medium text-2xl sm:text-3xl leading-tight'
                    style={{
                      color:
                        step.badgeColor === "purple" ? "#FFFFFF" : "#020A23",
                    }}>
                    {step.number}
                  </span>
                </div>

                {/* Text content */}
                <div className='text-center sm:text-left'>
                  <h3 className='font-semibold text-lg sm:text-xl leading-relaxed tracking-wide text-black'>
                    {step.title}
                  </h3>
                  <p className='mt-2 font-medium text-sm sm:text-base leading-relaxed tracking-wide text-[#605F62]'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
