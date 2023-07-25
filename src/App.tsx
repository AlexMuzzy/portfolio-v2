import { useState } from "react";
import { ThreeCanvas } from "./ThreeCanvas";
import Card from "./Card";

import profileImage from "./assets/1654880800553.jpg";

function App() {
  const [isVisible, setIsVisible] = useState<Boolean>(false);

  return (
    <>
      {/* This is the background */}
      <section className="absolute h-screen w-screen bg-black">
        <ThreeCanvas />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <h1 className="text-6xl font-light text-white">Alex Muzzy</h1>;
        </div>

        <button
          className="absolute right-10 top-10 rounded-2xl bg-slate-600/25 p-3 text-xl text-white/75 backdrop-blur-md"
          onClick={() => setIsVisible(!isVisible)}
        >
          See More
        </button>
      </section>

      {/* This is the foreground */}
      <section className="h-screen w-screen">
        <div className="flex h-full w-full items-center justify-center">
          <Card isVisible={isVisible}>
            <div className="mt-6 flex flex-col items-center rounded p-4">
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
