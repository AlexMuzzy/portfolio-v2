import { useState } from "react";
import { ThreeCanvas } from "./ThreeCanvas";
import Card from "./Card";

import profileImage from "./assets/1654880800553.jpg";

function App() {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  return (
    <>
      {/* This is the background */}
      <section className="absolute w-screen h-screen bg-black">
        <ThreeCanvas />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl text-white font-light">Alex Muzzy</h1>;
        </div>

        <button
          className="absolute top-10 right-10 rounded-2xl bg-slate-600/25 text-white/75 p-3 text-xl backdrop-blur-md"
          onClick={() => setIsVisible(!isVisible)}
        >
          See More
        </button>
      </section>

      {/* This is the foreground */}
      <section className="h-screen w-screen">
        <div className="flex h-full w-full justify-center items-center">
          <Card isVisible={isVisible}>
            <div className="flex flex-col items-center mt-6 p-4 rounded">
              <img src={profileImage} className="w-1/4 rounded-full" />
              <p className="mt-4">Software Engineer</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default App;
