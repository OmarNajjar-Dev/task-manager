export default function IconBubble({
  Icon: IconComponent,
  onClick,
  bgColor,
  iconColor,
  hoverBg,
  hoverColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full transition-colors ${bgColor} ${hoverBg}`}
    >
      {IconComponent && (
        <IconComponent className={`w-5 h-5 ${iconColor} ${hoverColor}`} />
      )}
    </button>
  );
}
