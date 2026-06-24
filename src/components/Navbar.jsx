import logo from "../assets/Bloombash Logo.jpg";

function Navbar() {
  return (
    <nav className='w-full bg-white h-[100px]'>
      <div className='flex items-center justify-between mx-auto max-w-[1248px] h-[60px] mt-5 px-6'>
        {/* Logo */}
        <img src={logo} alt='Bloombash Logo' className='h-10' />

        {/* Nav Links */}
        <ul className='flex items-center gap-[54px]'>
          {["Services", "About Us", "Industries", "Values", "Contact"].map(
            link => (
              <li
                key={link}
                className='cursor-pointer font-semibold text-[18px] text-[#020A23] leading-none font-inter hover:text-purple-700 transition-colors'>
                {link}
              </li>
            ),
          )}
        </ul>

        {/* CTA Button */}
        <button
          className='w-[180px] h-[60px] rounded-[15px] text-white font-semibold text-[18px] cursor-pointer hover:opacity-90 transition-opacity'
          style={{
            background: "linear-gradient(95.25deg, #472187 3%, #7C3AED 100%)",
          }}>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
