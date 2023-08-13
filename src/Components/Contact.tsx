import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const size = 42;

  const socialMediaIcons = [
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      link: "https://www.facebook.com/AlexMuzey/",
    },
    {
      name: "Github",
      icon: FaGithubSquare,
      link: "https://github.com/AlexMuzzy",
    },
    {
      name: "Instagram",
      icon: FaInstagramSquare,
      link: "https://www.instagram.com/alex.muzzy/",
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
          >
            <IconContext.Provider
              value={{
                className: "contactIcon",
                color: "white",
              }}
            >
              <socialMediaIcon.icon {...{ size }}></socialMediaIcon.icon>
            </IconContext.Provider>
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
