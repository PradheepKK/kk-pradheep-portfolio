import { Fragment, useState } from "react";
import { profile } from "../data/profile";
import "../styles/hero.css";

function Hero() {
  // If the real profile photo is missing, fall back to the placeholder.
  const [imageFailed, setImageFailed] = useState(false);
  const imageSrc = imageFailed ? profile.imagePlaceholder : profile.image;

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <p className="section-label hero__greeting">{profile.greeting}</p>
          <h1 id="hero-title" className="hero__name">
            {profile.name}
          </h1>

          <p className="hero__roles">
            {profile.roles.map((role, index) => (
              <Fragment key={role}>
                {index > 0 && (
                  <span className="hero__divider" aria-hidden="true">
                    |
                  </span>
                )}
                <span>{role}</span>
              </Fragment>
            ))}
          </p>

          <p className="hero__intro">{profile.intro}</p>
          <p className="hero__description text-muted">{profile.description}</p>

          <ul className="hero__interests" aria-label="Technical interests">
            {profile.interests.map((interest) => (
              <li key={interest}>
                <span className="tag">{interest}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="btn btn-outline"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <div className="hero__photo-frame">
            <img
              src={imageSrc}
              alt={profile.imageAlt}
              width="400"
              height="500"
              decoding="async"
              onError={() => setImageFailed(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;