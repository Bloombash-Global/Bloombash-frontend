import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type='button'
      aria-label='Scroll to top'
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`lg:hidden fixed bottom-5 right-5 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-violet-700 text-white shadow-lg hover:bg-violet-800 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}>
      <ArrowUp size={20} aria-hidden='true' />
    </button>
  );
};

export default ScrollTopBtn;
