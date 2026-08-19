import ProfilePhoto from "../../../../../assets/ProfilePhoto/ProfilePhoto2.jpg";
import HiIcon from "../../../../../assets/stickers/hi.png";

export const ABOUT_DATA = {
  about: {
    title: "Home",
    subtitle: "SYSTEMS ENGINEERING // PRE-PROFESSIONAL INTERN",
    name: "Evelyn",
    role: "Systems Engineering Student",
    description:
      "Systems Engineering student bridging technical logic with user-focused solutions, actively growing through hands-on practice.",
    bio: "I'm Evelyn Pascual, a <b>Systems Engineering student</b> based in Peru, seeking a pre-professional <b>Internship</b> in tech. I'm deeply enthusiastic about software development, focusing my growth on building reliable web solutions as an aspiring <b>Full-Stack Developer</b>.<br/><br/>My journey into technology began with a background in architecture, where I learned to appreciate solid foundations, blueprint planning, and detail-oriented design. As a continuous learner, transitioning into engineering felt like a natural evolution, allowing me to apply that structural mindset to software while adopting <b>good programming practices</b> to write thoughtful code. I'm eager to bring this growth-oriented mindset to a team where I can learn from experienced developers and contribute to reliable solutions.",

    status:
      "Available for Pre-Professional Internships (Full-Time / Part-Time)",
    profileSlides: [
      {
        url: ProfilePhoto,
        badge: "Evelyn Pascual",
        caption: "Systems Engineering Intern canvas",
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
