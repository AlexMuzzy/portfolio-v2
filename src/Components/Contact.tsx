import { IconContext } from "react-icons";
import {
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const size = 42;

  const socialMediaIcons = [
    {
      name: "Github",
      icon: FaGithubSquare,
      link: "https://github.com/AlexMuzzy",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/alex-musgrove-242a0b16a/",
    },
  ];

  return (
    <div className="flex justify-center gap-8">
      {socialMediaIcons.map((socialMediaIcon) => {
        return (
          <a
            href={socialMediaIcon.link}
            key={`media-icon-${socialMediaIcon.name}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${socialMediaIcon.name} profile`}
          >
            <IconContext.Provider
              value={{
                className: "contactIcon",
                color: "white",
              }}
            >
              <socialMediaIcon.icon size={size} className="hover:fill-gray-400 hover:transition-all duration-300" />
            </IconContext.Provider>
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
