import { PROJECTS_DATA } from "../../data/projectsData";
import { ProjectCard } from "./components/ProjectCard";


export const ProjectsView = () => {
  return (
    <div className="flex flex-col gap-16 w-full animate-in fade-in duration-300 pb-16">
    {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
