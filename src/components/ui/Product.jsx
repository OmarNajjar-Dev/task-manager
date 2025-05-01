import React, { useContext } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import IconBubble from "./IconBubble";
import { CartContext } from "../../contexts/CartContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function Product({ id, img, title, description, price }) {
  // Access favorites context
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { cart, setCart } = useContext(CartContext);

  // Determine if this product is favorited or in cart
  const isFavorited = favorites.some((item) => item.id === id);
  const isInCart = cart.some((item) => item.id === id);

  // Handlers to toggle favorite or cart status
  const handleFavorite = () => {
    if (isFavorited) {
      setFavorites(favorites.filter((item) => item.id !== id));
    } else {
      setFavorites([...favorites, { id, img, title, description, price }]);
    }
  };

  const handleCart = () => {
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart([...cart, { id, img, title, description, price }]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="relative w-full pt-[100%]">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price}</span>

          <div className="flex gap-2">
            <IconBubble
              Icon={Heart}
              onClick={handleFavorite}
              bgColor={isFavorited ? "bg-red-100" : "bg-gray-100"}
              iconColor={isFavorited ? "text-red-600" : "text-gray-600"}
              hoverBg="hover:bg-red-200"
              hoverColor="hover:text-red-600"
            />

            <IconBubble
              Icon={ShoppingCart}
              onClick={handleCart}
              bgColor={isInCart ? "bg-blue-100" : "bg-gray-100"}
              iconColor={isInCart ? "text-blue-600" : "text-gray-600"}
              hoverBg="hover:bg-blue-200"
              hoverColor="hover:text-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
