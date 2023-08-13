import { useState } from "react";
import { ThreeCanvas } from "./Background/ThreeCanvas";
import Card from "./Components/Card";
import Intro from "./Sections/Intro";
import Carousel from "./Components/Carousel";
import Projects from "./Sections/Projects";
import Title from "./Background/Title";
import { SectionProps } from "./types";

function App() {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  const sections: SectionProps[] = [
    {
      name: "Intro",
      component: <Intro />,
    },
    {
      name: "Projects",
      component: <Projects />,
    },
  ];

  const PopOverButton = ({ label }: { label: string }) => (
    <button
      className="absolute right-10 top-10 rounded-2xl bg-slate-600/25 p-3 text-xl text-white/75 backdrop-blur-md"
      onClick={() => setIsVisible(!isVisible)}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* This is the background */}
      <section className="absolute h-screen w-screen bg-black">
        <ThreeCanvas />
        <Title />
        <PopOverButton label="See More" />
      </section>

      {/* This is the foreground */}
      <section className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          <Card {...{ isVisible }}>
            <div className="flex h-full flex-col justify-center py-4">
              <Carousel {...{ sections }} />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default App;
