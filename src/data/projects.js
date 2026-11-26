// Content for the Projects section.
//
// To add a project: copy one object, paste it in the array and edit the values.
// To remove a project: delete its object.
//
// The entries below are SAMPLE PLACEHOLDERS. Replace them with your real
// projects and set isSample to false.
//
// - thumbnail: file inside public/images/projects/ (leave "" to use the default)
// - github / demo: full URLs. Leave "" to hide the button.

export const projects = {
  label: "03 / Projects",
  title: "Projects",
  intro:
    "A selection of projects. The cards below are sample placeholders and will be replaced with my real work.",

  items: [
    {
      id: "sample-1",
      name: "E-commerce Web Application",
      description:
        "Developed a responsive e-commerce web application using React JS with product listing, cart management, and secure checkout. Integrated Amazon Product API for real-time product data and payment gateway for seamless transactions, ensuring a user-friendly experience across devices.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"],
      thumbnail: "ecommerce.png",
      github: "https://github.com/PradheepKK/ecommerce.git",
      demo: "https://ecommerce-blush-gamma-65.vercel.app/",
      isSample: false,
    },
    {
      id: "sample-2",
      name: "PromptClick Web Application ",
      description:
        "Developed PromptClick, an AI-powered platform for exploring, searching, and generating images using curated prompts. Integrated Hugging Face and Gemini APIs for AI image generation and prompt optimization. Built an admin dashboard to manage prompts, users, and content using Next.js and Tailwind CSS.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase"],
      thumbnail: "promptclicks.png",
      github: "https://github.com/PradheepKK/promptclick",
      demo: "https://promptclick-sqhv.vercel.app/",
      isSample: false,
    },
    {
      id: "sample-3",
      name: "FaceQR – AI-Powered QR Code Generator ",
      description:
        "Developed an AI-powered QR Code Generator that allows users to upload a person's image and a URL to generate a customized QR code featuring the person's face as part of the QR design.",
      technologies: ["Python", "Next.js", "Tailwind CSS" ],
      thumbnail: "faceqr.png",
      github: "https://github.com/PradheepKK/face-qr-studio.git",
      demo: "https://face-qr-studio.vercel.app/",
      isSample: false,
    },
   
  ],
};