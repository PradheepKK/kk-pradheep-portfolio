import { profile } from "../data/profile";
import { resume } from "../data/resume";
import "../styles/resume.css";

function Resume() {
  return (
    <section id="resume" className="section resume" aria-labelledby="resume-title">
      <div className="container">
        <span className="section-label">{resume.label}</span>
        <h2 id="resume-title" className="section-title">
          {resume.title}
        </h2>
        <p className="text-muted resume__intro">{resume.intro}</p>

        <div className="card resume__card">
          <span className="resume__icon" aria-hidden="true">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5" />
              <path d="M9 13h6M9 17h6" />
            </svg>
          </span>

          <div className="resume__info">
            <h3 className="resume__title">{resume.cardTitle}</h3>
            <p className="text-muted resume__text">{resume.cardText}</p>
          </div>

          <div className="resume__actions">
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="btn btn-primary"
            >
              Download Resume
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;