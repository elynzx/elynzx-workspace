import ProfilePhoto from "../../../../../assets/ProfilePhoto/Profile_02.png";
import HiIcon from "../../../../../assets/stickers/hi.png";

export const ABOUT_DATA = {
  about: {
    title: "Home",
    subtitle: "SYSTEMS ENGINEERING // PRE-PROFESSIONAL INTERN",
    name: "Evelyn",
    role: "Software developer | ui designer",
    description:
      "Systems Engineering student bridging technical logic with user-focused solutions, actively growing through hands-on practice.",
    bio: "My journey into technology began with a background in architecture, where I first learned to appreciate the value of solid foundations, blueprint planning, and detail-oriented design. Transitioning into engineering felt like a natural evolution, allowing me to apply that exact structural mindset to software development and fuel my fascination with how complex systems connect from end to end. By bridging rigorous technical logic with a creative edge, I am able to approach full-stack challenges with a unique perspective, always striving to understand the complete product lifecycle. I'm eager to bring this collaborative, cross-functional mindset to a high-performing team, where I can master the stack, contribute meaningfully across the entire development workflow, and deliver reliable solutions together.",

    status:
      "Available for Pre-Professional Internships (Full-Time / Part-Time)",
    profileSlides: [
      {
        url: ProfilePhoto,
        badge: "Evelyn Pascual",
        caption: "Systems Engineering Intern canvas",
      },
      {
        url: "RUTA",
        badge: "IEEE WIE Volunteer",
        caption: "Facilitating tech and STEM workshops for girls",
      },
      {
        url: "RUTA",
        badge: "Tech Networking",
        caption: "Connecting with engineering professionals and mentors",
      },
    ],

    images: {
      profile: ProfilePhoto,
      hi: HiIcon,
    },
    credentials: [
      "TOEIC Certified – B2 Professional Working Proficiency",
      "Top 10% Academic Merit Rank – UTP Faculty of Engineering",
      "Full-Stack Web Development – In Progress (Tecsup Bootcamp)",
      "IEEE WIE Volunteer – Facilitating STEM school workshops for girls",
    ],
  },
  education: [
    {
      degree: "B.S. in Systems Engineering",
      school: "Universidad Tecnológica del Perú (UTP)",
      period: "2022 - Present",
      description:
        "Top 10% faculty rank. Academic coursework focuses on programming logic, databases, data structures, OOP fundamentals with Java, Spring Boot, and user interface fundamentals.",
    },
    {
      degree: "Full-Stack Coding Bootcamp",
      school: "Código Tecsup",
      period: "2026 - Present",
      description:
        "Practical software program focused on web development. Currently learning to build interfaces with React and managing logic with Python.",
    },
  ],
};
