import ProductsList from "../components/ui/ProductsList";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Favorites</h1>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductsList products={cart} />
        </div>
      )}
    </div>
  );
}
