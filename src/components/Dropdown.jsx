import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const buildOptions = [
  "Custom Software/Web App",
  "AI Powered Solutions",
  "Product Design & MVP",
  "IT Consulting",
  "Tech Infrastructure",
  "Startup Acceleration",
  "Industry Solutions",
];

function Dropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("below");
  const [activeIndex, setActiveIndex] = useState(buildOptions.indexOf(value));
  const wrapperRef = useRef(null);

  const openMenu = () => {
    const button = wrapperRef.current?.querySelector("button");
    const bounds = button?.getBoundingClientRect();
    const spaceBelow = bounds ? window.innerHeight - bounds.bottom : 0;
    const spaceAbove = bounds?.top ?? 0;

    setPlacement(
      spaceBelow < 260 && spaceAbove > spaceBelow ? "above" : "below",
    );
    setActiveIndex(Math.max(buildOptions.indexOf(value), 0));
    setOpen(true);
  };

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const selectOption = index => {
    onChange({ target: { name: "buildType", value: buildOptions[index] } });
    setActiveIndex(index);
    setOpen(false);
  };

  const handleKeyDown = event => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) {
          openMenu();
        } else {
          setActiveIndex(index => (index + 1) % buildOptions.length);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) {
          openMenu();
        } else {
          setActiveIndex(index =>
            (index - 1 + buildOptions.length) % buildOptions.length,
          );
        }
        break;
      case "Home":
        if (open) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;
      case "End":
        if (open) {
          event.preventDefault();
          setActiveIndex(buildOptions.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) {
          selectOption(activeIndex);
        } else {
          openMenu();
        }
        break;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div ref={wrapperRef} className='relative'>
      <button
        id='project-build-type'
        type='button'
        role='combobox'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-controls='project-build-options'
        aria-activedescendant={
          open ? `project-build-option-${activeIndex}` : undefined
        }
        onClick={() => {
          if (open) setOpen(false);
          else openMenu();
        }}
        onKeyDown={handleKeyDown}
        className='flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-gray-900 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30'>
        <span>{value}</span>
        <ChevronDown
          size={18}
          aria-hidden='true'
          className={`shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id='project-build-options'
          role='listbox'
          aria-labelledby='project-build-type'
          style={{
            maxHeight: "15rem",
            ...(placement === "above"
              ? { bottom: "calc(100% + 0.5rem)" }
              : { top: "calc(100% + 0.5rem)" }),
          }}
          className='absolute z-20 w-full overflow-y-auto rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl shadow-slate-900/10'>
          {buildOptions.map((option, index) => {
            const selected = option === value;
            const active = index === activeIndex;

            return (
              <li
                key={option}
                id={`project-build-option-${index}`}
                role='option'
                aria-selected={selected}
                onPointerMove={() => setActiveIndex(index)}
                onClick={() => selectOption(index)}
                className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active || selected
                    ? "bg-purple-50 font-medium text-purple-700"
                    : "text-gray-800 hover:bg-gray-50"
                }`}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
