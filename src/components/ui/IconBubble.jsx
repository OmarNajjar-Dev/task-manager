export default function IconBubble({ icon, onClick, bgColor }) {
  return (
    <button onClick={onClick} className={`p-2 rounded-full ${bgColor} transition-colors`}>
        {icon}
    </button>
  );
}
