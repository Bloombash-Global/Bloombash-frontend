const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "Tailor-made web and mobile applications designed for performance, scalability, and your unique business needs.",
  },
  {
    icon: "🤖",
    title: "AI Powered Solutions",
    description:
      "Intelligent systems and automation tools that streamline operations and unlock new possibilities for your business.",
  },
  {
    icon: "🎨",
    title: "Product Design & MVP Prototyping",
    description:
      "From wireframes to working prototypes - we design intuitive products and bring your MVP to life fast.",
  },
  {
    icon: "🧭",
    title: "IT Consulting & Digital Transformation",
    description:
      "Strategic guidance to modernize your tech stack and position your organization for sustainable digital growth.",
  },
  {
    icon: "☁️",
    title: "Tech Infrastructure & Cloud Solutions",
    description:
      "Reliable, secure and scalable cloud architectures that keep your business running at peak performance.",
  },
  {
    icon: "🚀",
    title: "Startup Acceleration & Idea Incubation",
    description:
      "We believe in your idea even before the market does. From raw concept to launch-ready product.",
  },
  {
    icon: "🏥",
    title: "Industry-Specific Tech Solutions",
    description:
      "Deep-focus solutions for HealthTech, Edtech, Fintech, Agritech, and more - built with domain expertise.",
  },
];

function WhatWeBuild() {
  return (
    <section className='w-full bg-[#EAEAF8] py-[69px]'>
      <div className='max-w-[1260px] mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          {/* Badge */}
          <div className='flex items-center gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-4 py-[10px]'>
            <span className='w-2 h-2 rounded-full bg-[#7C3AED]' />

            <span className='uppercase text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              What We Build
            </span>
          </div>

          {/* Heading */}
          <h2 className='mt-8 text-center text-[48px] leading-[58px] font-bold text-[#020A23]'>
            End-to-End Technology{" "}
            <span className='text-[#7C3AED]'>Solutions</span>
          </h2>

          {/* Description */}
          <p className='mt-5 max-w-[524px] text-center text-[18px] leading-[32px] font-medium text-[#020A23CC]'>
            From concept to scale – we handle every layer of your digital
            transformation journey.
          </p>
        </div>

        {/* Cards */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
          {services.map(service => (
            <div
              key={service.title}
              className='
                bg-white
                rounded-[10px]
                border
                border-[#87848B4D]
                p-5
                min-h-[305px]
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              '>
              {/* Icon */}
              <div className='w-[50px] h-[50px] rounded-[10px] bg-[#F5F5F5] flex items-center justify-center text-2xl'>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className='mt-6 text-[18px] leading-[30px] font-bold text-[#020A23]'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='mt-3 text-[16px] leading-[30px] font-medium text-[#605F62]'>
                {service.description}
              </p>

              {/* Learn More */}
              <button className='mt-auto pt-8 flex items-center gap-3 text-[#020A23] font-semibold hover:gap-4 transition-all duration-300'>
                Learn more
                <span className='text-xl'>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;
