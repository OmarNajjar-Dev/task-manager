import React from "react";
import { X, Trash2, Check } from "lucide-react";

export default function TaskCard({
  title,
  description,
  completed,
  onToggle,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            className="rounded-full p-1 bg-gray-100 text-gray-600"
          >
            {completed ? (
              <Check className="h-5 w-5 text-green-600 bg-green-100" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </button>
          <h3
            className={`text-lg font-medium ${
              completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        </div>
        {description && (
          <p className="mt-2 text-gray-600 ml-9">{description}</p>
        )}
      </div>
      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-700 p-2"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
