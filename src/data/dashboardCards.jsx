import { CheckSquare, Package } from "lucide-react";

const className = "w-16 h-16 text-indigo-500 mb-4";

export const Cards = [
  {
    icon: <CheckSquare className={className} />,
    title: "Task Manager",
    description: "Manage your daily tasks and stay organized",
    link: "/tasks"
  },
  {
    icon: <Package className={className} />,
    title: "Products",
    description: "Browse our collection of amazing products",
    link: "/products"
  },
];
