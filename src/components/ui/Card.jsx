import { Link } from "react-router-dom";

export default function Card({ icon, title, description, linkTo }) {
  return (
    <Link
      to={linkTo}
      className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-center justify-center flex-col text-center">
        {icon}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
