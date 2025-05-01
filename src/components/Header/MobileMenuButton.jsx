import { Menu, X } from "lucide-react";

export default function MobileMenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      className="text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
}
