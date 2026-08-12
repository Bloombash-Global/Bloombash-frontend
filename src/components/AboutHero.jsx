// src/components/AboutHero.jsx
function AboutHero() {
  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "15+", label: "Countries Served" },
    { value: "50+", label: "Team Members" },
    { value: "7+", label: "Years of Innovation" },
  ];

  return (
    <section
      className='w-full h-174.25 flex items-center justify-center'
      style={{
        background: "linear-gradient(90deg, #102878 3%, #44109C 100%)",
      }}>
      {/* Inner Container */}
      <div className='w-213.5 h-113 flex flex-col items-center gap-15'>
        {/* Tag */}
        <div className='w-auto h-9.75 flex items-center justify-center gap-2.75 rounded-[20px] border-[0.5px] border-white/50 pt-2.5 pr-4 pb-2.5 pl-4'>
          <span className='w-2.5 h-2.5 rounded-full bg-white' />
          <span className='font-inter font-semibold text-[16px] leading-none text-white'>
            OUR STORY & PURPOSE
          </span>
        </div>

        {/* Header Container */}
        <div className='w-198 h-54.25 flex flex-col items-center '>
          <h1 className='w-199 h-30 font-poppins font-semibold text-[80px] leading-none text-center text-white'>
            We Are <span className='text-[#FFC77A]'>Bloombash</span>
          </h1>

          <p className='w-141.25 h-20.25 font-poppins font-medium text-[18px] leading-[27px] tracking-[0.02em] text-center text-white/80'>
            Bringing Ideas to Life, Nations, and the World. We're a technology
            company built on the belief that every great idea deserves the tools
            to become reality.
          </p>
        </div>

        {/* Stats */}
        <div className='w-213.5 flex items-start justify-center gap-20'>
          {stats.map(stat => (
            <div
              key={stat.label}
              className='w-auto flex flex-col items-center gap-3'>
              <span className='font-inter font-semibold text-[48px] leading-none text-[#FFC77A]'>
                {stat.value}
              </span>
              <span className='w-auto h-auto font-inter font-semibold text-[18px] leading-none text-white/80 text-center'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
