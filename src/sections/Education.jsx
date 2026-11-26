import TimelineItem from "../components/TimelineItem";
import { education } from "../data/education";
import "../styles/timeline.css";

function Education() {
  return (
    <section
      id="education"
      className="section education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <span className="section-label">{education.label}</span>
        <h2 id="education-title" className="section-title">
          {education.title}
        </h2>
        <p className="text-muted timeline__intro">{education.intro}</p>

        {education.items.length > 0 ? (
          <ol className="timeline">
            {education.items.map((item) => (
              <TimelineItem key={item.id} {...item} />
            ))}
          </ol>
        ) : (
          <p className="text-muted">Education details will be added soon.</p>
        )}
      </div>
    </section>
  );
}

export default Education;