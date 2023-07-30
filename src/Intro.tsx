import profileImage from "./assets/1654880800553.jpg";

const Intro = () => (
  <div className="m-auto flex w-1/2 flex-col rounded md:w-1/3 lg:w-1/4">
    <img src={profileImage} className="rounded-full" />
    <p className="mt-4 text-center text-2xl">Software Engineer</p>
  </div>
);

export default Intro;
