import Contact from "../Components/Contact";
import profileImage from "../assets/1747910894012.jpeg";

const Intro = () => (
  <section className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-md">
    <div className="flex flex-col items-center">
      <img
        src={profileImage}
        alt="Alex Musgrove - Software Engineer"
        className="mb-6 h-32 w-32 rounded-full shadow-2xl ring-4 ring-white/30"
      />
      <p className="mb-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
        Software Engineer
      </p>
      <p className="mb-8 max-w-2xl text-center text-lg leading-relaxed text-white">
        I'm a software engineer with a passion for building beautiful,
        functional, and accessible web applications. I specialize in modern web
        technologies and love creating seamless user experiences.
      </p>
    </div>
    <Contact />
  </section>
);

export default Intro;
