import { useState } from "react";

const industries = [
  "HealthTech",
  "EdTech",
  "FinTech",
  "AgriTech",
  "GovTech",
  "Logistics & Supply Chain",
  "E-commerce",
  "Non-Profit NGOs",
  "Energy & Clean Tech",
  "Real Estate Tech",
];

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("HealthTech");

  return (
    <section className='w-full bg-[#EAEAF8] py-[68px]'>
      <div className='max-w-[1071px] mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          {/* Badge */}
          <div className='flex items-center gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-4 py-[10px]'>
            <span className='w-2 h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              Industries
            </span>
          </div>

          {/* Heading */}
          <h2 className='mt-8 text-center text-[48px] leading-[58px] font-bold text-[#020A23]'>
            Access Every <span className='text-[#7C3AED]'>Sector</span>
          </h2>

          {/* Description */}
          <p className='mt-5 max-w-[600px] text-center text-[18px] leading-[32px] font-medium text-[#020A23CC]'>
            We bring deep domain expertise across high-impact sectors — building
            technology that solves real problems.
          </p>
        </div>

        {/* Pills */}
        <div className='mt-16 flex flex-wrap justify-center gap-6'>
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`
                px-4 py-[10px]
                rounded-[30px]
                border
                border-[#87848B80]
                font-medium
                text-[15px]
                leading-[26px]
                tracking-[2%]
                transition-all
                duration-300
                ${
                  activeIndustry === industry
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#EAEAF8] hover:bg-[#7C3AED1A]"
                }
              `}>
              {industry}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
