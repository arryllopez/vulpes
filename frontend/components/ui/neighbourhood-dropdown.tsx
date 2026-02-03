"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Neighbourhood } from "@/lib/neighbourhoods"

interface NeighbourhoodDropdownProps {
  label: string
  placeholder: string
  options: Neighbourhood[]
  value: Neighbourhood | null
  onChange: (value: Neighbourhood | null) => void
  className?: string
}

export function NeighbourhoodDropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
  className,
}: NeighbourhoodDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const handleSelect = (option: Neighbourhood) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div className={cn("w-full", className)} ref={dropdownRef}>
      <label className="block text-sm text-gray-600 mb-1.5">{label}</label>
      <div
        className={cn(
          "w-full rounded-xl overflow-hidden cursor-pointer select-none",
          "bg-white/80 backdrop-blur-sm",
          "border border-[#ccdbfd]/50",
          "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isOpen && "ring-2 ring-primary/20 border-primary",
          isOpen ? "rounded-2xl shadow-lg" : "rounded-xl",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header / Selected Value */}
        <div className="flex items-center gap-3 p-3 md:p-3.5">
          <div className="flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            {value ? (
              <p className="text-sm md:text-base font-medium text-gray-900 truncate">{value.name}</p>
            ) : (
              <p className="text-sm md:text-base text-gray-400">{placeholder}</p>
            )}
          </div>
          <div className="flex h-8 w-8 items-center justify-center">
            <ChevronDown
              className={cn(
                "h-4 w-4 md:h-5 md:w-5 text-gray-400 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isOpen && "rotate-180",
              )}
            />
          </div>
        </div>

        {/* Options List */}
        <div
          className={cn(
            "grid",
            "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="px-2 pb-2 max-h-[240px] md:max-h-[280px] overflow-y-auto">
              <div className="space-y-0.5">
                {options.map((option, index) => (
                  <div
                    key={option.name}
                    className={cn(
                      "flex items-center gap-3 rounded-lg p-2.5 md:p-3",
                      "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      "hover:bg-primary/5",
                      value?.name === option.name && "bg-primary/10",
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                    )}
                    style={{
                      transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelect(option)
                    }}
                  >
                    <div className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors duration-300">
                      <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{option.name}</p>
                    </div>
                    {value?.name === option.name && (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
