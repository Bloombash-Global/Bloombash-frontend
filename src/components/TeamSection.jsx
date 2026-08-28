import useInView from "../hooks/useInView";

import samsonImg from "../assets/Oluwapelumi Samson.png";
import babajideImg from "../assets/Babajide Awodire.png";
import adetolaImg from "../assets/Adetola Adebayo.png";
import joshuaImg from "../assets/Joshua Adetunji.png";
import troyImg from "../assets/Troy Johnson.png";

const team = [
  {
    image: samsonImg,
    name: "Oluwapelumi Samson",
    role: "CTO and Co-founder",
    description:
      "A dedicated iOS Engineer with over 5 years of experience crafting intuitive, high-quality applications across iOS and iPadOS. Focused on building efficient solutions using Swift, SwiftUI, and modern Apple frameworks, with a strong emphasis on clean architecture, performance optimization, and delivering seamless user experiences.",
  },
  {
    image: babajideImg,
    name: "Babajide Awodire",
    role: "CEO and Co-founder",
    description:
      "A passionate Software Engineer with over 8 years of experience transforming ideas into elegant, high-performing Android applications and libraries.",
  },
  {
    image: adetolaImg,
    name: "Adetola Adebayo",
    role: "Customer Service Representative & Virtual Assistant",
    description:
      "A dedicated Customer Service Representative and Virtual Assistant with over 2 years of professional experience. Skilled in communication, customer support, administrative assistance, and managing tasks efficiently. With a strong focus on professionalism and customer satisfaction, she consistently delivers reliable and quality service.",
  },
  {
    image: joshuaImg,
    name: "Joshua Adetunji",
    role: "Creative and Brand Designer",
    description:
      "A passionate and results-driven Creative and Brand Designer with over 6 years of experience delivering impactful creative solutions for startups and organizations across Nigeria and the diaspora. Proficient in Adobe Creative Suite, specializing in multimedia, marketing, branding, and print design, combining strong visual communication skills with exceptional collaboration and interpersonal abilities.",
  },
  {
    image: troyImg,
    name: "Troy Johnson",
    role: "Web Developer",
    description:
      "A passionate Web Developer with 2 years of experience building responsive and performant web applications. Skilled in React, JavaScript, Tailwind CSS, and modern web technologies, with a strong focus on clean architecture, algorithmic problem-solving, performance optimization, and building maintainable solutions that scale.",
  },
];

function TeamSection() {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const visible = isInView ? "anim-visible" : "";

  return (
    <section ref={sectionRef} className='w-full py-24 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center gap-4 mb-16'>
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 anim-hidden anim-fade-down ${visible}`}>
            <span className='w-2 h-2 rounded-full bg-purple-600' />
            <span className='font-inter font-semibold text-sm text-purple-700'>
              MEET THE TEAM
            </span>
          </div>

          <h2
            className={`font-inter font-bold text-3xl sm:text-4xl md:text-[40px] text-[#0B0B2B] anim-hidden anim-fade-up ${visible} anim-delay-2`}>
            The people behind the <span className='text-[#7C3AED]'>Vision</span>
          </h2>

          <p
            className={`font-inter text-base text-gray-600 max-w-xl anim-hidden anim-fade-up ${visible} anim-delay-3`}>
            A focused team of strategists, designers, engineers, and innovators
            helping ideas grow into meaningful products.
          </p>
        </div>

        {/* Team cards */}
        <div className='relative'>
          <div className='flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide'>
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`shrink-0 w-105 snap-start rounded-2xl overflow-hidden bg-[#F1EDFB] anim-hidden anim-fade-up ${visible} anim-delay-${Math.min(
                  index + 4,
                  10,
                )}`}>
                {/* Purple header */}
                <div className='h-24 bg-linear-to-r from-[#3B1A9C] to-[#5B21B6] relative'>
                  <div className='absolute left-1/2 -bottom-20 -translate-x-1/2'>
                    <div className='w-35 h-35 rounded-full bg-white p-1.5 overflow-hidden'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full rounded-full object-cover'
                      />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className='pt-25 pb-10 px-6 text-center'>
                  <h3 className='font-inter font-bold text-xl text-[#0B0B2B] mb-1'>
                    {member.name}
                  </h3>

                  <p className='font-inter font-semibold text-[#7C3AED] mb-4'>
                    {member.role}
                  </p>

                  <p className='font-inter text-gray-600 text-sm leading-relaxed'>
                    {member.description}
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

export default TeamSection;
