// Content for the Education section.
//
// To add a qualification: copy one object, paste it in the array and edit it.
// Entries are shown in the order listed here (latest first).
//
// - period: for example "Graduated 2024" or "Expected 2026"
// - type: a short label shown as a tag

export const education = {
  label: "05 / Education",
  title: "Education",
  intro:
    "My academic background combines a technical degree in Computer Science with a postgraduate qualification in management.",

  items: [
    {
      id: "mba",
      title: "MBA - Operation and Project Management",
      organization: "Madurai Kamaraj University",
      period: "Graduated 2026",
      type: "Distance Education",
      description:
        "Postgraduate studies focused on operations, planning and project management.",
      points: [],
      isSample: false,
    },
    {
      id: "be-cse",
      title: "B.E. Computer Science",
      organization: "KLN College of Engineering, Madurai",
      period: "Graduated 2024",
      type: "Undergraduate",
      description:
        "Bachelor of Engineering in Computer Science, building the foundation for software development.",
      points: [],
      isSample: false,
    },
  ],
};