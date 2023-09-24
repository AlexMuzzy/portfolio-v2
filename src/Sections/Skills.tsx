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
import useWindowDimensions from "../Components/UtilFunctions";
import { useEffect, useState } from "react";

const Skills = () => {
  const { width } = useWindowDimensions();
  const [iconSize, setIconSize] = useState<number>(20);

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

  useEffect(() => {
    if (width >= 640) {
      // Responsive design small
      setIconSize(40);
    } else {
      // Responsive design below small
      setIconSize(28);
    }
  }, [width]);

  return (
    <section className="max-h-[50%] overflow-auto sm:max-h-full">
      <h2 className="mt-4 text-2xl">Skills</h2>
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div className="m-4 flex flex-col items-center justify-center rounded-md border p-2 shadow-md">
            <IconContext.Provider
              value={{ color: "white", size: iconSize.toString() }}
            >
              {<skill.icon />}
            </IconContext.Provider>

            <p className="text-base sm:text-lg">{`${skill.name}`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
