import React, { useState } from "react";
import { SettingsAction, SettingsState } from "../App";

const BackgroundMenu = ({
  settings,
  settingsDispatch,
}: {
  settings: SettingsState;
  settingsDispatch: React.Dispatch<SettingsAction>;
}) => {
  const [isColourDropdownVisible, setIsColourDropdownVisible] = useState(false);

  // Sourced from FlowBite's Tailwind CSS Min and Max Range
  const ParticleInput = () => (
    <>
      <label
        htmlFor="number-of-particles"
        className="my-2 block text-sm font-medium"
      >
        Number of Particles: {settings.numberOfParticles}
      </label>
      <input
        id="number-of-particles"
        type="range"
        min={1}
        max={1000}
        value={settings.numberOfParticles}
        onChange={(e) =>
          settingsDispatch({
            type: "SET_NUMBER_OF_PARTICLES",
            payload: parseInt(e.target.value),
          })
        }
        className="mb-6 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      />
    </>
  );

  // Sourced from FlowBite's Tailwind CSS Dropdown Divider
  const ColourDropdown = () => {
    const colours = [
      {
        name: "White",
        value: "white",
      },
      {
        name: "Blue",
        value: "blue",
      },
      {
        name: "Red",
        value: "red",
      },
      {
        name: "Light Blue",
        value: "lightblue",
      },
    ];

    return (
      <>
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setIsColourDropdownVisible(!isColourDropdownVisible)}
        >
          Colour Dropdown
          <svg
            className="ml-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isColourDropdownVisible && (
          <div
            id="dropdownDivider"
            className="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              {colours.map((colour) => {
                const isSelected = settings.colour === colour.value;

                return (
                  <>
                    <li
                      key={colour.name}
                      className={`${
                        isSelected // Highlight the selected colour
                          ? "bg-gray-100 dark:bg-gray-600 dark:text-white"
                          : ""
                      } block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                      onClick={() =>
                        settingsDispatch({
                          type: "SET_COLOUR",
                          payload: colour.value,
                        })
                      }
                    >
                      {colour.name}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  };

  const FpsCounterCheckbox = () => (
    <div className="my-6 flex items-center">
      <input
        id="fps-counter-checkbox"
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        checked={settings.fpsCounterChecked}
        onChange={() =>
          settingsDispatch({
            type: "TOGGLE_FPS_COUNTER",
            payload: !settings.fpsCounterChecked, // Flip the boolean
          })
        }
      />
      <label
        htmlFor="fps-counter-checkbox"
        className="ml-2 text-sm font-medium"
      >
        Show FPS Counter
      </label>
    </div>
  );

  // TODO: Figure out why Stats FPS counter checkbox can't be passed as a prop

  return (
    <>
      <section className="max-h-[70%] w-full overflow-auto p-3 sm:max-h-full">
        <h2 className="my-4 text-center text-2xl">Background Menu</h2>
        <p className="dark:text- py-3 text-center text-lg text-gray-400">
          Like the background? You can change the number of particles, the
          colour, and even add an FPS counter!
        </p>
        <ParticleInput />
        <ColourDropdown />
        <FpsCounterCheckbox />
      </section>
    </>
  );
};

export default BackgroundMenu;
