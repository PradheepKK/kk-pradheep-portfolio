// Content for the Experience section.
//
// To add an entry: copy one object, paste it in the array and edit the values.
// To remove an entry: delete its object.
//
// Only add real experience. Internships, freelance work, personal projects
// and self-directed learning are all valid entries.
//
// - type: a short label such as "Learning", "Internship", "Full-time"
// - period: for example "2024 - Present" or "Ongoing"
// - isSample: set to true only for temporary placeholder entries

export const experience = {
  label: "04 / Experience",
  title: "Experience",
  intro:
    "I am an entry-level developer looking for my first professional role. Until then, I am building my skills through hands-on practice and personal projects.",

  items: [
    {
      id: "self-learning",
      title: "Self-Directed Learning and Practice",
      organization: "Personal development",
      period: "Ongoing",
      type: "Learning",
      description:
        "Continuously practising software development with a focus on Java and modern web technologies.",
      points: [
        "Practising Core Java and basic Spring Boot for backend development.",
        "Building responsive interfaces with HTML5, CSS3, JavaScript and React.js.",
        "Using Git and GitHub for version control and code hosting.",
      ],
      isSample: false,
    },
  ],
};