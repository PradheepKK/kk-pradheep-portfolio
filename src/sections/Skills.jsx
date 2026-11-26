import LogoCard from "../components/LogoCard";
import { skills } from "../data/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <span className="section-label">{skills.label}</span>
        <h2 id="skills-title" className="section-title">
          {skills.title}
        </h2>

        {skills.categories.map(({ title, description, items }) => (
          <div key={title} className="skills__group">
            <h3 className="skills__group-title">{title}</h3>
            <p className="text-muted skills__group-text">{description}</p>
            <ul className="logo-grid">
              {items.map((item) => (
                <LogoCard key={item.name} {...item} />
              ))}
            </ul>
          </div>
        ))}

        <div className="skills__group">
          <h3 className="skills__tools-title">{skills.toolsTitle}</h3>
          <ul className="logo-grid">
            {skills.tools.map((tool) => (
              <LogoCard key={tool.name} {...tool} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;