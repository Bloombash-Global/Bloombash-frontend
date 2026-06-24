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
  return (
    <section className='w-full bg-white py-[90px]'>
      <div className='max-w-[1308px] mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          {/* Badge */}
          <div className='flex items-center gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-4 py-[10px]'>
            <span className='w-2 h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2 className='mt-8 text-center text-[48px] leading-[58px] font-bold text-[#020A23]'>
            A proven path{" "}
            <span className='text-[#7C3AED]'>from Idea to Impact</span>
          </h2>

          {/* Description */}
          <p className='mt-5 max-w-[708px] text-center text-[18px] leading-[32px] font-medium text-[#020A23CC]'>
            Our collaborative four-step process ensures clarity, transparency,
            and results — every step of the way.
          </p>
        </div>

        {/* Steps with connector line */}
        <div
          className='mt-20 relative flex items-start justify-between'
          style={{ position: "relative" }}>
          {/* Dotted connector line */}
          <div
            className='absolute top-[44px] left-[180px] right-[180px] h-[2px] z-0'
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #2221238c 0px, #87848b 6px, transparent 10px, transparent 16px)",
            }}
          />

          {steps.map(step => (
            <div
              key={step.number}
              className='flex flex-col items-center text-center relative'
              style={{ width: "303px", zIndex: 1 }}>
              {/* Circular Badge */}
              <div
                className={`
                  w-[90px] h-[90px]
                  rounded-full
                  flex items-center justify-center
                  shadow-lg
                  relative z-10
                  ${step.badgeColor === "purple" ? "bg-gradient-to-br" : ""}
                `}
                style={
                  step.badgeColor === "purple"
                    ? {
                        background:
                          "linear-gradient(304.68deg, #7C3AED 10.04%, #7034D6 84.93%)",
                      }
                    : { background: "#FFC77A" }
                }>
                <span
                  className='font-medium text-[32px] leading-[26px]'
                  style={{
                    color: step.badgeColor === "purple" ? "#FFFFFF" : "#020A23",
                  }}>
                  {step.number}
                </span>
              </div>
              {/* Title */}
              <h3 className='mt-6 font-semibold text-[20px] leading-[26px] tracking-[2%] text-black'>
                {step.title}
              </h3>
              {/* Description */}
              <p className='mt-3 font-medium text-[16px] leading-[26px] tracking-[2%] text-[#605F62]'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
