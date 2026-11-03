import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

function ProjectHero() {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });
  const visible = isInView ? "anim-visible" : "";
  const [prefersReducedMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [hours, setHours] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const duration = 1200;
    let startTime;
    let frameId;

    const countUp = timestamp => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setHours(Math.round(easedProgress * 24));

      if (progress < 1) frameId = requestAnimationFrame(countUp);
    };

    frameId = requestAnimationFrame(countUp);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion]);

  return (
    <div ref={sectionRef} className='max-w-lg'>
      <span
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6 anim-hidden anim-fade-down ${visible}`}>
        <span className='w-2 h-2 rounded-full bg-purple-600' />
        PROJECT INITIATION
      </span>

      <h1
        className={`text-5xl font-bold text-gray-900 leading-tight mb-6 anim-hidden anim-fade-up ${visible} anim-delay-2`}>
        Ready to bring your{" "}
        <span className='text-purple-600'>Idea to Life ?</span>
      </h1>

      <p
        className={`text-gray-600 text-lg mb-10 anim-hidden anim-fade-up ${visible} anim-delay-3`}>
        Whether you have a rough concept or a fully documented product spec, our
        team is ready to scale your vision into a world-class technology
        solution.
      </p>

      <div className='grid grid-cols-2 gap-4'>
        <div
          className={`bg-gray-100  rounded-xl p-6 border border-gray-100 anim-hidden anim-scale-in ${visible} anim-delay-4 `}>
          <p
            aria-label={`${prefersReducedMotion ? 24 : hours} hours`}
            className='text-3xl font-bold text-purple-600 mb-1'>
            {prefersReducedMotion ? 24 : hours}h
          </p>
          <p className='text-gray-900 font-medium'>Initial Response Time</p>
        </div>
        <div
          className={`bg-gray-100 rounded-xl p-6 border border-gray-100 anim-hidden anim-scale-in ${visible} anim-delay-5`}>
          <p className='text-3xl font-bold text-purple-600 mb-1'>
            <span className={isInView ? "stat-roll-in" : "opacity-0"}>1</span>
            <span>st</span>
          </p>
          <p className='text-gray-900 font-medium'>Step: Discovery Call</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHero;
