import React from "react";
import { IconContext } from "react-icons";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import "./Carousel.css";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row px-4">
      <IconContext.Provider
        value={{
          className: "carouselArrow",
          color: "white",
        }}
      >
        <div className="mt-24 flex items-center">
          <HiArrowLeft className="text-4xl text-white/75" />
        </div>
      </IconContext.Provider>

      {children}
      <IconContext.Provider
        value={{
          className: "carouselArrow",
          color: "white",
        }}
      >
        <div className="mt-24 flex items-center">
          <HiArrowRight className="text-4xl text-white/75" />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Carousel;
