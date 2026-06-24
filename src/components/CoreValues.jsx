import innovationIcon from "../assets/Innovation.png";
import inclusivityIcon from "../assets/Inclusivity.png";
import integrityIcon from "../assets/Integrity.png";
import excellenceIcon from "../assets/Excellence.png";
import collaborationIcon from "../assets/Collaboration.png";

const values = [
  {
    icon: innovationIcon,
    title: "INNOVATION FIRST",
    description:
      "We push boundaries to build what others won't constantly exploring new frontiers in technology.",
  },
  {
    icon: inclusivityIcon,
    title: "INCLUSIVITY",
    description:
      "We believe great ideas can come from anyone, regardless of background, geography, or resources.",
  },
  {
    icon: integrityIcon,
    title: "INTEGRITY",
    description:
      "We build with transparency, trust, and purpose delivering on every commitment we make.",
  },
  {
    icon: excellenceIcon,
    title: "EXCELLENCE",
    description:
      "We deliver quality without compromise, every product, every feature, every interaction.",
  },
  {
    icon: collaborationIcon,
    title: "COLLABORATION",
    description:
      "We grow ideas together with the people behind them, your success is our shared mission.",
  },
];

function CoreValues() {
  return (
    <section className='w-full bg-[#EAEAF8] py-[90px]'>
      <div className='max-w-[1330px] mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col items-center'>
          {/* Badge */}
          <div className='flex items-center gap-[11px] rounded-[20px] border border-[#87848B] bg-[#7C3AED1A] px-4 py-[10px]'>
            <span className='w-2 h-2 rounded-full bg-[#7C3AED]' />
            <span className='uppercase text-[15px] font-extrabold tracking-[1px] text-[#420C9F]'>
              Our Foundation
            </span>
          </div>

          {/* Heading */}
          <h2 className='mt-8 text-center text-[48px] leading-[58px] font-bold text-[#020A23]'>
            Built on <span className='text-[#7C3AED]'>Core Values</span>
          </h2>

          {/* Description */}
          <p className='mt-5 max-w-[580px] text-center text-[18px] leading-[32px] font-medium text-[#020A23CC]'>
            These aren't just words on a wall, they define every line of code we
            write and every client we serve.
          </p>
        </div>

        {/* Cards */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5'>
          {values.map(value => (
            <div
              key={value.title}
              className='
                bg-white
                rounded-[10px]
                border
                border-[#87848B4D]
                p-5
                min-h-[250px]
                flex
                flex-col
                items-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              '>
              {/* Icon */}
              <img
                src={value.icon}
                alt={value.title}
                className='w-[30px] h-[36px] object-contain'
              />

              {/* Title */}
              <h3 className='mt-6 text-[16px] leading-[26px] font-bold text-[#020A23]'>
                {value.title}
              </h3>

              {/* Description */}
              <p className='mt-4 text-[14px] leading-[26px] font-semibold text-[#605F62]'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
