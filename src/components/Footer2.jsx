// src/components/Footer2.jsx
function Footer2() {
  return (
    <footer className='w-full bg-[#0B0B2B] py-8 px-6 sm:px-16'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap'>
        <p className='font-inter text-sm text-white/70 text-center sm:text-left flex items-center gap-1.5'>
          <span>©</span> 2026 Bloombash. All rights reserved. Built with
          purpose.
        </p>

        <div className='flex items-center gap-6 flex-wrap justify-center'>
          <a
            href='#'
            className='font-inter text-sm text-white/70 hover:text-white transition-colors'>
            Privacy
          </a>
          <a
            href='#'
            className='font-inter text-sm text-white/70 hover:text-white transition-colors'>
            Terms
          </a>
          <a
            href='#'
            className='font-inter text-sm text-white/70 hover:text-white transition-colors'>
            LinkedIn
          </a>
          <a
            href='#'
            className='font-inter text-sm text-white/70 hover:text-white transition-colors'>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
