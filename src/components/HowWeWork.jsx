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

const badgeStyles = {
  purple: {
    background: "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
    color: "#FFFFFF",
  },
  orange: { background: "#FFC77A", color: "#020A23" },
};

const connectorStyle = {
  backgroundImage:
    "repeating-linear-gradient(to right, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
};

const verticalConnectorStyle = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
};

function HowWeWork() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.1 });

  return (
    <section className='w-full bg-white py-12 sm:py-16 md:py-22.5'>
      <div className='mx-auto max-w-327 px-4 sm:px-6'>
        <div ref={headerRef} className='flex flex-col items-center'>
          <div
            className={`flex items-center gap-2 sm:gap-2.75 rounded-full border border-[#87848B] bg-[#7C3AED1A] px-3 py-2 sm:px-4 sm:py-2.5 ${
              headerInView ? "anim-visible" : "anim-hidden"
            }`}
            style={{
              animation: headerInView
                ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}>
            <span className='h-1.5 w-1.5 rounded-full bg-[#7C3AED] sm:h-2 sm:w-2' />
            <span className='text-xs font-extrabold uppercase tracking-wide text-[#420C9F] sm:text-sm md:text-base'>
              How We Work
            </span>
          </div>

          <h2
            className={`mt-5 text-center text-3xl font-bold leading-9 text-[#020A23] sm:mt-6 sm:text-4xl sm:leading-11 md:mt-8 md:text-5xl md:leading-14 ${
              headerInView ? "anim-visible" : "anim-hidden"
            }`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            A proven path{" "}
            <span className='text-[#7C3AED]'>from Idea to Impact</span>
          </h2>

          <p
            className={`mt-3 max-w-177 px-2 text-center text-sm font-medium leading-relaxed text-[#020A23CC] sm:mt-4 sm:text-base md:mt-5 md:text-lg ${
              headerInView ? "anim-visible" : "anim-hidden"
            }`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            Our collaborative four-step process ensures clarity, transparency,
            and results — every step of the way.
          </p>
        </div>

        <div ref={stepsRef} className='relative mt-10 sm:mt-14 md:mt-20'>
          {/* Desktop: horizontal layout */}
          <div className='relative hidden items-start justify-between lg:flex'>
            <div
              className={`absolute top-11 right-45 left-45 z-0 h-0.5 ${
                stepsInView ? "anim-visible" : "anim-hidden"
              }`}
              style={{
                ...connectorStyle,
                animation: stepsInView
                  ? "growWidth 1s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                  : "none",
                transformOrigin: "left center",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative z-10 flex w-75.75 flex-col items-center text-center ${
                  stepsInView ? "anim-visible" : "anim-hidden"
                }`}
                style={{
                  animation: stepsInView
                    ? `fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) ${
                        0.3 + index * 0.15
                      }s both`
                    : "none",
                }}>
                <div
                  className='relative z-10 flex h-22.5 w-22.5 items-center justify-center rounded-full shadow-lg'
                  style={{
                    background: badgeStyles[step.badgeColor].background,
                  }}>
                  <span
                    className='text-3xl font-medium leading-tight'
                    style={{ color: badgeStyles[step.badgeColor].color }}>
                    {step.number}
                  </span>
                </div>

                <h3 className='mt-6 text-xl font-semibold leading-relaxed text-black'>
                  {step.title}
                </h3>

                <p className='mt-3 text-base font-medium leading-relaxed text-[#605F62]'>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/tablet: vertical layout */}
          <div className='relative flex flex-col items-center gap-0 lg:hidden'>
            <div
              className={`absolute top-11.25 bottom-11.25 left-1/2 z-0 hidden w-0.5 -translate-x-1/2 max-sm:block ${
                stepsInView ? "anim-visible" : "anim-hidden"
              }`}
              style={{
                ...verticalConnectorStyle,
                animation: stepsInView ? "fadeIn 0.8s ease 0.2s both" : "none",
              }}
            />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative z-10 flex w-full max-w-150 flex-col items-center gap-4 py-4 sm:flex-row sm:gap-6 ${
                  stepsInView ? "anim-visible" : "anim-hidden"
                }`}
                style={{
                  animation: stepsInView
                    ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${
                        0.2 + index * 0.12
                      }s both`
                    : "none",
                }}>
                <div
                  className='relative z-10 flex h-17.5 w-17.5 shrink-0 items-center justify-center rounded-full shadow-lg sm:h-20 sm:w-20'
                  style={{
                    background: badgeStyles[step.badgeColor].background,
                  }}>
                  <span
                    className='text-2xl font-medium leading-tight sm:text-3xl'
                    style={{ color: badgeStyles[step.badgeColor].color }}>
                    {step.number}
                  </span>
                </div>

                <div className='text-center sm:text-left'>
                  <h3 className='text-lg font-semibold leading-relaxed text-black sm:text-xl'>
                    {step.title}
                  </h3>

                  <p className='mt-2 text-sm font-medium leading-6 text-[#605F62] sm:text-base sm:leading-relaxed'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
