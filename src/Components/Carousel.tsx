import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./Carousel.css";
import { SettingsAction, SettingsState } from "../App";
import Skills from "../Sections/Skills";
import Intro from "../Sections/Intro";
import BackgroundMenu from "../Sections/BackgroundMenu";

const Carousel = ({
  settings,
  settingsDispatch,
}: {
  settings: SettingsState;
  settingsDispatch: React.Dispatch<SettingsAction>;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const indexLength = 3;

  const handleLeftClick = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(indexLength - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex >= indexLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
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
    <div className="flex flex-row items-center justify-center p-4">
      <ArrowWrapper onClick={handleLeftClick}>
        <HiArrowLeft className="text-4xl text-white/75" />
      </ArrowWrapper>
      {currentIndex === 0 && <Intro />}
      {currentIndex === 1 && <Skills />}
      {currentIndex === 2 && (
        <BackgroundMenu {...{ settings, settingsDispatch }} />
      )}
      <ArrowWrapper onClick={handleRightClick}>
        <HiArrowRight className="text-4xl text-white/75" />
      </ArrowWrapper>
    </div>
  );
};

export default Carousel;
