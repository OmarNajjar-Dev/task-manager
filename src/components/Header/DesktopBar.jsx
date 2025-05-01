import NavLinks from "./NavLinks";

export default function DesktopBar() {
  return (
    <div className="flex justify-between items-center w-full">
      {/* Left side: Navigation links */}
      <div className="flex items-center gap-8">
        <NavLinks />
      </div>
    </div>
  );
}