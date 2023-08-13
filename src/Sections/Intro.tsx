import Contact from "../Components/Contact";
import profileImage from "../assets/1654880800553.jpg";

const Intro = () => (
  <section>
    <div className="m-auto w-1/3 rounded">
      <img src={profileImage} className="rounded-full" />
      <h2 className="mt-4 text-center text-2xl">Software Engineer</h2>
    </div>
    <div className="my-4"></div>
    <Contact />
  </section>
);

export default Intro;
