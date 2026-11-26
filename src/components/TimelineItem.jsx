import "../styles/timeline.css";

// Reusable timeline entry. Used by the Experience and Education sections.
function TimelineItem({
  title,
  organization,
  period,
  type,
  description,
  points = [],
  isSample = false,
}) {
  return (
    <li className="timeline__item">
      <div className="card timeline__card">
        <div className="timeline__meta">
          {period && <span className="timeline__period">{period}</span>}
          {type && <span className="tag">{type}</span>}
          {isSample && <span className="timeline__badge">Sample Placeholder</span>}
        </div>

        <h3 className="timeline__title">{title}</h3>
        {organization && <p className="timeline__org">{organization}</p>}

        {description && <p className="text-muted timeline__text">{description}</p>}

        {points.length > 0 && (
          <ul className="timeline__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default TimelineItem;