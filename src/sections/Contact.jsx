import { useState } from "react";
import { profile } from "../data/profile";
import { contact } from "../data/contact";
import "../styles/contact.css";

const icons = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <span className="contact__icon" aria-hidden="true">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[name]}
      </svg>
    </span>
  );
}

const emptyForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [opened, setOpened] = useState(false);

  const phoneLink = `tel:+91${profile.phone}`;

  const details = [
    {
      icon: "mail",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: "phone",
      label: "Phone",
      value: profile.phone,
      href: phoneLink,
    },
    {
      icon: "pin",
      label: "Location",
      value: profile.location,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  // Opens the visitor's email app with the message already filled in.
  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      form.subject.trim() || `Portfolio enquiry from ${form.name.trim()}`;
    const message = form.message.trim().replace(/\r?\n/g, "\r\n");
    const body = `${message}\r\n\r\n---\r\nName: ${form.name.trim()}\r\nEmail: ${form.email.trim()}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setOpened(true);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <span className="section-label">{contact.label}</span>
        <h2 id="contact-title" className="section-title">
          {contact.title}
        </h2>
        <p className="text-muted contact__intro">{contact.intro}</p>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="contact__details">
              {details.map(({ icon, label, value, href }) => (
                <li key={label} className="contact__detail">
                  <Icon name={icon} />
                  <div>
                    <p className="contact__detail-label">{label}</p>
                    {href ? (
                      <a href={href} className="contact__detail-value">
                        {value}
                      </a>
                    ) : (
                      <p className="contact__detail-value">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="contact__social-title">Find me online</h3>
            <ul className="contact__social">
              {contact.social.map(({ id, name, url }) => (
                <li key={id}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      {name}
                    </a>
                  ) : (
                    <span className="contact__social-pending">
                      {name}: Link coming soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form className="card contact__form" onSubmit={handleSubmit}>
            <h3 className="contact__form-title">Send a message</h3>

            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-subject">Subject (optional)</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            <p className="contact__note text-muted" aria-live="polite">
              {opened
                ? `Your email app should now be open with the message ready. Press Send there to deliver it. If nothing opened, write directly to ${profile.email}.`
                : "This opens your email app with the message ready to send."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;