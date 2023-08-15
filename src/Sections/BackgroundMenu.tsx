import React from "react";

const BackgroundMenu = () => {
  const [numberOfParticles, setNumberOfParticles] = React.useState<number>(5);

  const handleNumberOfParticlesChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setNumberOfParticles(parseInt(event.target.value));
  };

  const ParticleInput = () => (
    <>
      <label
        htmlFor="number-of-particles"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Number of Particles: {numberOfParticles}
      </label>
      <input
        id="number-of-particles"
        type="range"
        min={1}
        max={200}
        value={numberOfParticles}
        onChange={handleNumberOfParticlesChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      />
    </>
  );

  return (
    <section className="w-full p-3">
      <h2 className="my-4 text-center text-2xl">Background Menu</h2>
      <ParticleInput />
    </section>
  );
};

export default BackgroundMenu;
