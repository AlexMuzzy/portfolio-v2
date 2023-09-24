import Contact from "../Components/Contact";
import profileImage from "../assets/1654880800553.jpg";

const Intro = () => (
  <section>
    <div className="m-auto rounded">
      <img src={profileImage} className="m-auto w-1/3 rounded-full" />
      <h2 className="my-4 text-center text-2xl">Software Engineer</h2>
      <p className="text-center text-xl">
        I'm a software engineer with a passion for building beautiful,
        functional, and accessible web applications.
      </p>
    </div>
    <div className="my-4"></div>
    <Contact />
  </section>
);

export default Intro;
