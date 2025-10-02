import { motion } from "framer-motion";
import Intro from "../Sections/Intro";
import Skills from "../Sections/Skills";

const ContentPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl space-y-16 px-4"
    >
      <Intro />
      <Skills />
    </motion.div>
  );
};

export default ContentPanel;
