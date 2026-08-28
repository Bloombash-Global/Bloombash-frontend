// src/components/AboutCTA.jsx
function AboutCTA() {
  return (
    <section
      className='w-full py-24 px-4 sm:px-6 flex items-center justify-center text-center'
      style={{
        background: "linear-gradient(90deg, #3B0F91 0%, #6D28D9 100%)",
      }}>
      <div className='max-w-3xl flex flex-col items-center gap-6'>
        <h2 className='font-inter font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight'>
          Let's Turn Your Idea Into{" "}
          <span className='text-[#FFC77A]'>Reality.</span>
        </h2>

        <p className='font-Inter font-bold text-base sm:text-xl text-white/80'>
          Whether you're a startup founder, enterprise, or dreamer with a napkin
          sketch - we're ready to build with you.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <button className='flex items-center gap-2 bg-[#FFC77A] text-[#1A0B33] font-inter font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity cursor-pointer'>
            Start your project
            <span>→</span>
          </button>

          <button className='bg-transparent border border-white/40 text-white font-inter font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer'>
            Book a free consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
