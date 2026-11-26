import { about } from "../data/about";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <span className="section-label">{about.label}</span>
        <h2 id="about-title" className="section-title">
          {about.title}
        </h2>

        <div className="about__grid">
          <div className="about__content">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about__text">
                {paragraph}
              </p>
            ))}

            <ul className="about__highlights">
              {about.highlights.map(({ title, text }) => (
                <li key={title} className="about__highlight">
                  <h3 className="about__highlight-title">{title}</h3>
                  <p className="text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card about__facts" aria-label="Quick facts">
            <h3 className="about__facts-title">Quick Facts</h3>
            <dl className="about__facts-list">
              {about.facts.map(({ label, value }) => (
                <div key={label} className="about__fact">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;