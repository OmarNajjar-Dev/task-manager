import NavLinks from "./NavLinks";

export default function MobileMenu() {
  return (
    <div className="sm:hidden px-4 pt-4 pb-6 space-y-4">
      {/* Links */}
      <div className="space-y-1">
        <NavLinks isMobile />
      </div>
    </div>
  );
}
