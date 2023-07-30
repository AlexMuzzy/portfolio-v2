import profileImage from "./assets/1654880800553.jpg";

const Intro = () => (
  <div className="flex w-1/4 flex-col rounded">
    <img src={profileImage} className="rounded-full" />
    <p className="mt-4 text-center text-2xl">Software Engineer</p>
  </div>
);

export default Intro;
