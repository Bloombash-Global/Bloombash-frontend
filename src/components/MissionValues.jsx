// src/components/MissionValues.jsx
import rocketImg from "../assets/Illustration Rocket.png";
import telescopeImg from "../assets/Illustration Telescope.png";

function MissionValues() {
  return (
    <section className='w-full py-24 px-4 sm:px-6 bg-[#EAEAF8]'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center gap-4 mb-16'>
          <div className='flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200'>
            <span className='w-2 h-2 rounded-full bg-purple-600' />
            <span className='font-inter font-semibold text-sm text-purple-700'>
              WHO WE ARE
            </span>
          </div>

          <h2 className='font-inter font-bold text-3xl sm:text-4xl md:text-[40px] text-[#0B0B2B]'>
            Purpose-Driven <span className='text-[#7C3AED]'>Innovation</span>
          </h2>

          <p className='font-inter text-base text-gray-600 max-w-xl'>
            Our mission and vision guide everything we build, every partnership
            we form, and every problem we solve.
          </p>
        </div>

        <div className=''>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='font-serif text-4xl mb-4 text-[#0B0B2B]'>
                MISSION
              </h3>
              <p className='text-gray-900 text-xl font-poppins font-medium'>
                At Bloombash, we are committed to building cutting-edge
                technologies and tailor made solutions that bring ideas to life.
                We partner with dreamers, disruptors, and visionaries regardless
                of background or resources to turn imagination into scalable
                innovation that serves industries, nations, and the world.
              </p>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src={rocketImg}
                alt='Mission illustration'
                className='w-full h-auto'
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='flex items-center justify-center order-2 md:order-1'>
              <img
                src={telescopeImg}
                alt='Vision illustration'
                className='max-w-full h-auto'
              />
            </div>
            <div className='order-1 md:order-2'>
              <h3 className='font-serif text-4xl mb-4 text-[#0B0B2B]'>
                VISION
              </h3>
              <p className='text-gray-900 text-xl font-poppins font-medium'>
                To be the world's most trusted catalyst for innovation,
                empowering individuals, companies, and nations by transforming
                even the most unlikely ideas into impactful, technology-driven
                realities that reshape industries and improve lives globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionValues;
