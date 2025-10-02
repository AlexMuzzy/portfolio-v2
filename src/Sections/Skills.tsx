import {
  FaAws,
  FaDocker,
  FaGit,
  FaJava,
  FaJenkins,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiKubernetes,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiGo,
  SiSpringboot,
  SiNextdotjs,
  SiMysql,
  SiApachekafka,
  SiGithubactions,
  SiAmazondynamodb,
  SiGooglecloud,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
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

  type SkillCategory = {
    name: string;
    color: string;
    skills: SkillProps[];
  };

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Kotlin", icon: SiKotlin },
        { name: "Go", icon: SiGo },
        { name: "Python", icon: FaPython },
        { name: "SQL", icon: TbSql },
        { name: "C++", icon: SiCplusplus },
      ],
    },
    {
      name: "Libraries/Frameworks",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "React", icon: FaReact },
        { name: "React Native", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      name: "Technologies",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Kafka", icon: SiApachekafka },
        { name: "Git", icon: FaGit },
        { name: "Docker", icon: FaDocker },
        { name: "Jenkins", icon: FaJenkins },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "GitHub Actions", icon: SiGithubactions },
      ],
    },
    {
      name: "Databases",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "DynamoDB", icon: SiAmazondynamodb },
      ],
    },
    {
      name: "Cloud",
      color: "from-amber-500 to-yellow-500",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Google Cloud", icon: SiGooglecloud },
      ],
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

  // Showcase of skills section
  return (
    <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-md">
      <h2 className="mb-3 text-3xl font-bold text-white">Technical Skills</h2>
      <p className="mb-8 text-lg text-white/90">
        Technologies and tools I work with, organized by expertise area:
      </p>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name} className="group">
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`h-1.5 w-16 rounded-full bg-linear-to-r ${category.color}`}
              />
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 shadow-lg transition-all hover:scale-105 hover:border-white/40 hover:bg-white/10 hover:shadow-xl"
                >
                  <IconContext.Provider
                    value={{ color: "white", size: iconSize.toString() }}
                  >
                    <skill.icon />
                  </IconContext.Provider>
                  <p className="text-base font-medium text-white sm:text-lg">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
