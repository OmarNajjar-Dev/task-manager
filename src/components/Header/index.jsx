import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((open) => !open);

  return (
    <header>
      <nav
        className="bg-white shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end sm:justify-between items-center h-16">
            {/* Left: Nav links (desktop) */}
            <div className="hidden sm:flex gap-8">
              <NavLinks />
            </div>

            {/* Right: Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <MobileMenuButton isOpen={mobileOpen} toggle={toggleMobile} />
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileOpen && <MobileMenu />}
      </nav>
    </header>
  );
}
