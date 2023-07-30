import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./Carousel.css";
import { SectionProps } from "./App";

const Carousel = ({ sections }: { sections: SectionProps[] }) => {
  const [currentSection, setCurrentSection] = React.useState<SectionProps>(
    sections[0], // Default to the first section
  );

  const handleLeftClick = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex === 0) {
      setCurrentSection(sections[sections.length - 1]);
    } else {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const handleRightClick = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex === sections.length - 1) {
      setCurrentSection(sections[0]);
    } else {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  const ArrowWrapper = ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => {
    return (
      <div>
        <IconContext.Provider
          value={{
            className: "carouselArrow",
            color: "white",
          }}
        >
          <div className="flex items-center" onClick={onClick}>
            {children}
          </div>
        </IconContext.Provider>
      </div>
    );
  };

  return (
    <div className="flex flex-row items-center justify-between p-4">
      <ArrowWrapper onClick={handleLeftClick}>
        <HiArrowLeft className="text-4xl text-white/75" />
      </ArrowWrapper>
      {currentSection.component}
      <ArrowWrapper onClick={handleRightClick}>
        <HiArrowRight className="text-4xl text-white/75" />
      </ArrowWrapper>
    </div>
  );
};

export default Carousel;
