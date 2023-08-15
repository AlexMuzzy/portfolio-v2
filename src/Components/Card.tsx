import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  children,
  isVisible = true,
}: {
  children?: React.ReactNode;
  isVisible?: Boolean;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-4/6 w-full rounded-xl border-2 border-slate-600/25 bg-slate-600/25 text-xl text-white/75 backdrop-blur-md sm:w-4/6 md:max-w-screen-md"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
