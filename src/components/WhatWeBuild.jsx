import useInView from "../hooks/useInView";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "💻",
    slug: "custom-software",
    title: "Custom Software Development",
    description:
      "Tailor-made web and mobile applications designed for performance, scalability, and your unique business needs.",
  },
  {
    icon: "🤖",
    slug: "ai-solutions",
    title: "AI Powered Solutions",
    description:
      "Intelligent systems and automation tools that streamline operations and unlock new possibilities for your business.",
  },
  {
    icon: "🎨",
    slug: "product-design",
    title: "Product Design & MVP Prototyping",
    description:
      "From wireframes to working prototypes - we design intuitive products and bring your MVP to life fast.",
  },
  {
    icon: "🧭",
    slug: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    description:
      "Strategic guidance to modernize your tech stack and position your organization for sustainable digital growth.",
  },
  {
    icon: "☁️",
    slug: "tech-infrastructure",
    title: "Tech Infrastructure & Cloud Solutions",
    description:
      "Reliable, secure and scalable cloud architectures that keep your business running at peak performance.",
  },
  {
    icon: "🚀",
    slug: "startup-acceleration",
    title: "Startup Acceleration & Idea Incubation",
    description:
      "We believe in your idea even before the market does. From raw concept to launch-ready product.",
  },
  {
    icon: "🏥",
    slug: "industry-solution",
    title: "Industry-Specific Tech Solutions",
    description:
      "Deep-focus solutions for HealthTech, Edtech, Fintech, Agritech, and more - built with domain expertise.",
  },
];

function WhatWeBuild() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id='services'
      className='w-full bg-[#EAEAF8] py-12 sm:py-14 md:py-[69px]'>
      <div className='max-w-[1260px] mx-auto px-4 sm:px-6'>
        {/* Header */}
        <div ref={headerRef} className='flex flex-col items-center'>
          {/* Badge */}
          <div
            className={`flex items-center gap-2 sm:gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-3 sm:px-4 py-2 sm:py-[10px] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7C3AED]' />

            <span className='uppercase text-[12px] sm:text-[14px] md:text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              What We Build
            </span>
          </div>

          <h2
            className={`mt-5 sm:mt-6 md:mt-8 text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[36px] sm:leading-[46px] md:leading-[58px] font-bold text-[#020A23] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both"
                : "none",
            }}>
            End-to-End Technology{" "}
            <span className='text-[#7C3AED]'>Solutions</span>
          </h2>

          <p
            className={`mt-3 sm:mt-4 md:mt-5 max-w-[524px] text-center text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[30px] md:leading-[32px] font-medium text-[#020A23CC] ${headerInView ? "anim-visible" : "anim-hidden"}`}
            style={{
              animation: headerInView
                ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both"
                : "none",
            }}>
            From concept to scale – we handle every layer of your digital
            transformation journey.
          </p>
        </div>

        <div
          ref={cardsRef}
          className='mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                bg-white
                rounded-[10px]
                border
                border-[#87848B4D]
                p-4 sm:p-5
                min-h-[250px] sm:min-h-[280px] md:min-h-[305px]
                flex
                flex-col
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                ${cardsInView ? "anim-visible" : "anim-hidden"}
              `}
              style={{
                animation: cardsInView
                  ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s both`
                  : "none",
              }}>
              <div className='flex items-left justify-between flex-col'>
                <div className='w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] rounded-[10px] bg-[#F5F5F5] flex items-center justify-between text-xl sm:text-2xl'>
                  {service.icon}
                </div>

                <h3 className='mt-4 sm:mt-6 text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] font-bold text-[#020A23]'>
                  {service.title}
                </h3>

                <p className='mt-2 sm:mt-3 text-[14px] sm:text-[16px] leading-[24px] sm:leading-[30px] font-medium text-[#605F62]'>
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className='mt-auto pt-3 sm:pt-2 flex sm:mt-6 flex items-center gap-3 text-[#020A23] text-[14px] sm:text-base font-semibold hover:gap-4 transition-all duration-300'>
                  Learn more
                  <span className='text-xl cursor-pointer'>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeBuild;
