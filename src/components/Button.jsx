import { Link } from "react-router-dom";

export default function Button({ href, text, icon, target, className = "" }) {
  const baseStyle =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full " +
    "bg-white/20 backdrop-blur-md border border-white/30 " +
    "text-white text-sm font-semibold " +
    "hover:bg-white/30 transition-all duration-300";

  // 🔹 External link (Spotify, dll)
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={`${baseStyle} ${className}`}
      >
        {icon && <img src={icon} alt="" className="w-4 h-4" />}
        {text}
      </a>
    );
  }

  // 🔹 Internal route (React Router) → TIDAK reload
  return (
    <Link to={href} className={`${baseStyle} ${className}`}>
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      {text}
    </Link>
  );
}
