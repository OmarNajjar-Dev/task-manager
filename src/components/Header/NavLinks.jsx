import { Link } from "react-router-dom";
import {
  Home,
  CheckSquare,
  Package,
  Heart,
  ShoppingCart
} from "lucide-react";

export default function NavLinks({ isMobile = false }) {
  const baseClass = isMobile
    ? "text-gray-900 hover:bg-gray-100 flex gap-4 px-3 py-2 rounded-md text-base font-medium"
    : "inline-flex items-center px-1 pt-1 text-sm font-medium border-indigo-500 text-gray-900";
  
  return (
    <>
      <Link to="/" className={baseClass}><Home className="w-5 h-5 mr-1" />Dashboard</Link>
      <Link to="/tasks" className={baseClass}><CheckSquare className="w-5 h-5 mr-1" />Tasks</Link>
      <Link to="/products" className={baseClass}><Package className="w-5 h-5 mr-1" />Products</Link>
      <Link to="/favorites" className={baseClass}><Heart className="w-5 h-5 mr-1" />Favorites</Link>
      <Link to="/cart" className={baseClass}><ShoppingCart className="w-5 h-5 mr-1" />Cart</Link>
    </>
  );
}
