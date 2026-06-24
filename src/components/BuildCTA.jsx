function BuildCTA() {
  return (
    <section className='w-full bg-white py-[60px]'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div
          className='flex flex-col items-center gap-12 rounded-[30px]'
          style={{ background: "#540FCB", padding: "60px 30px" }}>
          {/* Header */}
          <div className='flex flex-col items-center gap-5 max-w-[800px]'>
            <h2 className='text-center font-semibold text-[48px] leading-[64px] tracking-[1%]'>
              <span className='text-white'>Have an Idea ?</span>
              <br />
              <span style={{ color: "#FFC77A" }}>Let's build it together.</span>
            </h2>

            <p className='text-center font-semibold text-[16px] leading-[30px] tracking-[2%] text-white'>
              Whether you're a founsder with a bold vision or an enterprise
              ready for transformation — we're ready when you are.
            </p>
          </div>

          <div className='flex items-center gap-5'>
            <button
              className='flex items-center gap-[15px] rounded-[15px] px-[20px] py-[10px] font-semibold text-[20px]'
              style={{
                background: "#FFC77A",
                color: "#020A23",
                width: "291px",
                height: "60px",
                justifyContent: "center",
              }}>
              Start your project
              <span>→</span>
            </button>

            <button
              className='flex items-center justify-center rounded-[15px] px-[20px] py-[10px] font-semibold text-[20px] text-white border border-white'
              style={{ width: "291px", height: "60px" }}>
              Book a free consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildCTA;
