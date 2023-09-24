import { useReducer, useState } from "react";
import { ThreeCanvas } from "./Background/ThreeCanvas";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Title from "./Background/Title";
import { Stats } from "@react-three/drei";

export type SettingsState = {
  numberOfParticles: number;
  fpsCounterChecked: boolean;
  colour: string;
};

export type SettingsAction =
  | { type: "SET_NUMBER_OF_PARTICLES"; payload: number }
  | { type: "TOGGLE_FPS_COUNTER"; payload: boolean }
  | { type: "SET_COLOUR"; payload: string };

function settingsReducer(state: SettingsState, action: SettingsAction) {
  switch (action.type) {
    case "SET_NUMBER_OF_PARTICLES":
      return { ...state, numberOfParticles: action.payload };
    case "TOGGLE_FPS_COUNTER":
      return { ...state, fpsCounterChecked: action.payload };
    case "SET_COLOUR":
      return { ...state, colour: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [settings, settingsDispatch] = useReducer(settingsReducer, {
    numberOfParticles: 300,
    fpsCounterChecked: false,
    colour: "lightblue",
  });

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
      {settings.fpsCounterChecked && <Stats />}

      {/* This is the background */}
      <section className="absolute h-screen w-screen bg-black">
        <ThreeCanvas {...{ settings }} />
        <Title />
        <PopOverButton label="See More" />
      </section>

      {/* This is the foreground */}
      <section className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          <Card {...{ isVisible }}>
            <div className="flex h-full flex-col justify-center py-4">
              <Carousel
                {...{
                  settings,
                  settingsDispatch,
                }}
              />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default App;
