import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";
import "../styles/timeline.css";

function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <span className="section-label">{experience.label}</span>
        <h2 id="experience-title" className="section-title">
          {experience.title}
        </h2>
        <p className="text-muted timeline__intro">{experience.intro}</p>

        {experience.items.length > 0 ? (
          <ol className="timeline">
            {experience.items.map((item) => (
              <TimelineItem key={item.id} {...item} />
            ))}
          </ol>
        ) : (
          <p className="text-muted">Experience details will be added soon.</p>
        )}
      </div>
    </section>
  );
}

export default Experience;