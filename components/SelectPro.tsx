"use client";

import { useEffect, useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
  value: string;
};

export default function SelectPro({ label, options, onChange, value }: Props) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      listRef.current?.focus();
    }
  }, [open]);

  function openDropdown() {
    const indiceActual = options.findIndex((option) => option.value === value);
    setActiveIndex(indiceActual >= 0 ? indiceActual : 0);
    setOpen(true);
  }

  function selectOption(option: Option) {
    onChange(option.value);
    setOpen(false);
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDropdown();
    }
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, options.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex >= 0 && options[activeIndex]) {
        selectOption(options[activeIndex]);
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className={`relative w-full ${open ? "z-9999" : "z-10"}`}>
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openDropdown())}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-transparent px-4 text-left transition ${
          open ? "border-white/25" : "hover:bg-white/5"
        }`}
      >
        <span
          className={`truncate text-sm font-normal ${
            selected ? "text-white" : "text-white/45"
          }`}
        >
          {selected ? selected.label : label}
        </span>
        <span
          className={`ml-2 shrink-0 text-xs text-white/45 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          aria-label={label}
          className="absolute left-0 top-full z-9999 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.70)] backdrop-blur-xl focus:outline-none"
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex h-11 w-full items-center rounded-xl px-4 text-left text-sm font-normal transition ${
                option.value === value
                  ? "border border-[#8f9b7c]/40 bg-[#8f9b7c]/20 text-white"
                  : index === activeIndex
                    ? "border border-white/10 bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}