// Content for the Skills section.
// To add a skill, add a new { name, logo } entry to a category.
// Add level: "Basic" only where it applies. Do not add skills you have not used.
// Set invert: true for dark logos that are not visible on the dark background.

// Logos come from the open-source Devicon set (pinned version).
const icon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}`;

export const skills = {
  label: "02 / Skills",
  title: "Technical Skills",

  categories: [
    {
      title: "Frontend",
      description: "Building responsive and accessible user interfaces.",
      items: [
        { name: "HTML5", logo: icon("html5/html5-original.svg") },
        { name: "CSS3", logo: icon("css3/css3-original.svg") },
        { name: "JavaScript", logo: icon("javascript/javascript-original.svg") },
        { name: "React.js", logo: icon("react/react-original.svg") },
      ],
    },
    {
      title: "Backend",
      description: "Server-side development with the Java ecosystem.",
      items: [
        { name: "Core Java", logo: icon("java/java-original.svg") },
        {
          name: "Spring Boot",
          logo: icon("spring/spring-original.svg"),
          level: "Basic",
        },
      ],
    },
    {
      title: "Database",
      description: "Working with relational data.",
      items: [
        { name: "SQL", logo: "/images/logos/sql.svg", level: "Basic" },
        { name: "MySQL", logo: icon("mysql/mysql-original.svg") },
      ],
    },
  ],

  toolsTitle: "Tools & Technologies",
  tools: [
    { name: "Visual Studio Code", logo: icon("vscode/vscode-original.svg") },
    { name: "IntelliJ IDEA", logo: icon("intellij/intellij-original.svg") },
    { name: "Eclipse", logo: icon("eclipse/eclipse-original.svg"), invert: true },
    { name: "Git", logo: icon("git/git-original.svg") },
    { name: "GitHub", logo: icon("github/github-original.svg"), invert: true },
    { name: "Postman", logo: icon("postman/postman-original.svg") },
    { name: "MySQL Workbench", logo: icon("mysql/mysql-original.svg") },
  ],
};