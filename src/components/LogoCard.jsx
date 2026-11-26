import { useState } from "react";
import "../styles/skills.css";

// Reusable card: logo on top, name below, optional level badge.
function LogoCard({ name, logo, level, invert = false }) {
  // If the logo cannot be loaded, show the initials of the name instead.
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <li className="logo-card">
      {failed ? (
        <span className="logo-card__fallback" aria-hidden="true">
          {initials}
        </span>
      ) : (
        <img
          src={logo}
          alt=""
          width="48"
          height="48"
          loading="lazy"
          decoding="async"
          className={`logo-card__img ${invert ? "is-inverted" : ""}`}
          onError={() => setFailed(true)}
        />
      )}
      <span className="logo-card__name">{name}</span>
      {level && <span className="logo-card__level">{level}</span>}
    </li>
  );
}

export default LogoCard;