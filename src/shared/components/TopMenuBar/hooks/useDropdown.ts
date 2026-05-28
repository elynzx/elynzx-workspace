import { useState, useRef, useEffect, type RefObject } from "react";

export type DropdownType = "contact" | "info" | null;

interface Props {
  activeDropdown: DropdownType;
  menuRef: RefObject<HTMLDivElement | null>;
  toggleDropdown: (type: DropdownType) => void;
  closeDropdown: () => void;
}

export const useDropdown = (): Props => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = (type: DropdownType) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const closeDropdown = () => setActiveDropdown(null);

  return { activeDropdown, menuRef, toggleDropdown, closeDropdown };
};
