import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import {
  SiCplusplus,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { IconContext, IconType } from "react-icons";

const Projects = () => {
  type SkillProps = {
    name: string;
    icon: IconType;
  };

  const skills: SkillProps[] = [
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "C++",
      icon: SiCplusplus,
    },
    {
      name: "Python",
      icon: FaPython,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "Git",
      icon: FaGit,
    },
    {
      name: "Jenkins",
      icon: FaJenkins,
    },
    {
      name: "Linux",
      icon: FaLinux,
    },
    {
      name: "Bash",
      icon: VscTerminalBash,
    },
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3,
    },
    {
      name: "Java",
      icon: FaJava,
    },
  ];
  return (
    <div className="flex flex-wrap overflow-auto">
      {skills.map((skill) => (
        <div className="m-4 flex flex-col items-center justify-center rounded-md border p-2 shadow-md">
          <IconContext.Provider value={{ color: "white", size: "20" }}>
            {<skill.icon />}
          </IconContext.Provider>

          <p>{`${skill.name}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
