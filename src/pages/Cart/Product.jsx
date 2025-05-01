import { Trash2 } from "lucide-react";

export default function Product({ image, title, price }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <img src={image} alt={title} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
      <button className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
