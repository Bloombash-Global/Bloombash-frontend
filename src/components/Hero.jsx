import playBtn from "../assets/Play button.png";

const stats = [
  {
    value: (
      <>
        7<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Service Verticals",
  },
  {
    value: (
      <>
        5<span className='text-[#7C3AED]'>+</span>
      </>
    ),
    label: "Industries served",
  },
  { value: "∞", label: "Ideas Possible" },
  {
    value: (
      <>
        1<span className='text-[#7C3AED] text-[28px] align-top'>st</span>
      </>
    ),
    label: "Step: Your Idea",
  },
];

function Hero() {
  return (
    <section className='w-full bg-[#DEDDFF] flex flex-col items-center text-center min-h-[891px] pt-20 pb-5'>
      {/* Badge */}
      <div className='flex items-center gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-4 py-[10px]'>
        <span className='w-2 h-2 rounded-full bg-[#7C3AED]' />

        <span className='uppercase text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
          Innovation-Driven Tech Company
        </span>
      </div>

      {/* Heading */}
      <h1 className='mt-10 max-w-[1013px] text-[80px] leading-[96px] font-bold text-[#150734]'>
        Bringing{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#C9A96E 0%,#6B4DA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Ideas to Life,
        </span>
        <br />
        Nations, and the World
      </h1>

      {/* Description */}
      <p className='mt-8 max-w-[720px] text-[18px] leading-[32px] font-medium text-[#150734]'>
        We partner with dreamers, disruptors, and visionaries, regardless of
        background or resources to turn imagination into scalable,
        technology-driven innovation.
      </p>

      {/* Buttons */}
      <div className='mt-12 flex items-center gap-5'>
        <button
          className='w-[240px] h-[60px] rounded-[15px] text-white text-[20px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'
          style={{
            background: "linear-gradient(95.25deg,#472187 3%,#7C3AED 100%)",
          }}>
          Start a Project
        </button>

        <button className='w-[240px] h-[60px] rounded-[15px] border-2 border-[#87848B] flex items-center justify-center gap-3 text-[20px] font-semibold text-[#150734] transition-all duration-300 hover:bg-white/30'>
          <img src={playBtn} alt='Play' className='w-5 h-5' />
          Watch Our Story
        </button>
      </div>

      {/* Stats */}
      <div className='mt-24 flex items-center gap-16'>
        {stats.map((stat, index) => (
          <div key={index} className='flex flex-col items-center'>
            <h3
              className={`font-bold text-center ${
                stat.value === "∞" ? "text-[42px]" : "text-[36px]"
              } text-[#150734]`}>
              {stat.value}
            </h3>

            <p className='mt-2 text-[15px] font-medium text-[#150734]'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
