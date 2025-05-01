import Product from "./Product";
import { CartContext } from "../../contexts/CartContext";
import { useContext, useState } from "react";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState("");

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle WhatsApp checkout
  const handleCheckout = () => {
    if (!name.trim()) {
      alert("Please enter your name before checkout.");
      return;
    }
    const itemsText = cart
      .map((item) => `- ${item.title}: $${item.price.toFixed(2)}`)
      .join("%0A");
    const message = `Hello, my name is ${name}.%0A%0AI would like to place an order:%0A${itemsText}%0A%0ATotal: $${totalPrice.toFixed(
      2
    )}`;
    const phoneNumber = "79148987";
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4 mb-6">
          {cart.length > 0 ? (
            cart.map((item) => (
              <Product
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xl font-bold text-gray-900 mb-4">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send w-5 h-5"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Checkout via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
