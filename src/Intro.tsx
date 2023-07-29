import profileImage from "./assets/1654880800553.jpg";

const Intro = () => (
  <div className="mt-6 flex flex-col items-center rounded p-4">
    <img src={profileImage} className="w-1/4 rounded-full" />
    <p className="mt-4 text-2xl">Software Engineer</p>
  </div>
);

export default Intro;
