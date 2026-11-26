import { navLinks } from "../data/navLinks";
import { profile } from "../data/profile";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label="Back to top">
              <span className="footer__logo-mark">KP</span>
              <span>{profile.name}</span>
            </a>
            <p className="footer__role">{profile.roles.join(" | ")}</p>
            <p className="text-muted footer__location">{profile.location}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="footer__heading">Quick Links</h2>
            <ul className="footer__links">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__heading">Get in Touch</h2>
            <ul className="footer__links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href="#contact">Send a message</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="text-muted">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="footer__top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;