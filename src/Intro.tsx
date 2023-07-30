import profileImage from "./assets/1654880800553.jpg";

const Intro = () => (
  <div className="m-auto flex w-1/4 flex-col rounded">
    <img src={profileImage} className="rounded-full" />
    <p className="mt-4 text-2xl">Software Engineer</p>
  </div>
);

export default Intro;
