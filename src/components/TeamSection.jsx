// src/components/TeamSection.jsx
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
    role: "Customer Support & Virtual Assistant",
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

const TeamSection = () => {
  const [expandedBios, setExpandedBios] = useState({});
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollByCard = dir => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const visible = isInView ? "anim-visible" : "";

  return (
    <section
      ref={sectionRef}
      className='w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16 '>
          <div
            className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-200 anim-hidden anim-fade-down ${visible}`}>
            <span className='w-2 h-2 rounded-full bg-purple-600 shrink-0' />
            <span className='font-semibold text-xs sm:text-sm text-purple-700'>
              MEET THE TEAM
            </span>
          </div>

          <h2
            className={`font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
            The people behind the{" "}
            <span className='text-violet-600'>Vision</span>
          </h2>

          <p
            className={`text-sm sm:text-base text-gray-600 max-w-xl anim-hidden anim-fade-up ${visible} anim-delay-3`}>
            A focused team of strategists, designers, engineers, and innovators
            helping ideas grow into meaningful products.
          </p>
        </div>

        <div className='relative sm:mx-0'>
          {canScrollLeft && (
            <button
              type='button'
              aria-label='Previous team members'
              onClick={() => scrollByCard(-1)}
              className='flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border border-violet-100 shadow-md text-violet-700 hover:bg-violet-50 transition cursor-pointer'>
              <ChevronLeft size={20} aria-hidden='true' />
            </button>
          )}

          {/* Right arrow */}
          <button
            type='button'
            aria-label='Next team members'
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            className='flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border border-violet-100 shadow-md text-violet-700 hover:bg-violet-50 transition disabled:opacity-0 disabled:pointer-events-none cursor-pointer'>
            <ChevronRight size={20} aria-hidden='true' />
          </button>

          {/* Edge fades hint that more content exists */}
          {canScrollRight && (
            <div className='pointer-events-none absolute right-0 inset-y-0 w-16 z-5 bg-linear-to-l' />
          )}
          {canScrollLeft && (
            <div className='pointer-events-none absolute left-0 inset-y-0 w-16 z-5 bg-linear-to-r' />
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className='flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-4 px-6 sm:px-0 snap-x snap-mandatory scrollbar-hide'>
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`shrink-0 w-72 sm:w-80 md:w-96 snap-start rounded-2xl overflow-hidden bg-violet-50 shadow-sm hover:shadow-lg transition-shadow flex flex-col anim-hidden anim-fade-up ${visible} anim-delay-${Math.min(
                  index + 4,
                  10,
                )}`}>
                {/* Purple header */}
                <div className='h-20 sm:h-24 bg-linear-to-r from-violet-950 to-violet-800 relative'>
                  <div className='absolute left-1/2 -bottom-14 sm:-bottom-16 md:-bottom-20 -translate-x-1/2'>
                    <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-white p-1.5 overflow-hidden'>
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-full h-full rounded-full object-cover'
                      />
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className='flex flex-1 flex-col pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-5 sm:px-6 text-center'>
                  <h3 className='font-bold text-lg sm:text-xl text-slate-900 mb-1'>
                    {member.name}
                  </h3>

                  <p className='font-semibold text-sm sm:text-base text-violet-600 mb-3 sm:mb-4'>
                    {member.role}
                  </p>

                  <p
                    id={`team-bio-${index}`}
                    className={`${expandedBios[member.name] ? "" : "line-clamp-4"} text-gray-600 text-xs sm:text-sm leading-relaxed`}>
                    {member.description}
                  </p>

                  <button
                    type='button'
                    aria-expanded={Boolean(expandedBios[member.name])}
                    aria-controls={`team-bio-${index}`}
                    onClick={() =>
                      setExpandedBios(expanded => ({
                        ...expanded,
                        [member.name]: !expanded[member.name],
                      }))
                    }
                    className='cursor-pointer mt-auto pt-3 self-center inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-violet-700 hover:text-violet-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700'>
                    {expandedBios[member.name] ? (
                      <>
                        Read less <ChevronUp size={16} aria-hidden='true' />
                      </>
                    ) : (
                      <>
                        Read more <ChevronDown size={16} aria-hidden='true' />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
