import { useState, useRef, useEffect, type RefObject } from "react";

interface Props {
  isOpen: boolean;
  menuRef: RefObject<HTMLDivElement | null>;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useInfoModal = (): Props => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => setIsOpen(false);

  return { isOpen, menuRef, toggleDropdown, closeDropdown };
};
