import { AnimatePresence, motion } from "framer-motion";

const Card = ({
  children,
  isVisible,
}: {
  children?: React.ReactNode;
  isVisible: Boolean;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-4/6 w-4/6 rounded-xl border-2 border-slate-600/25 bg-slate-600/25 p-3 text-xl text-white/75 backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, scale: 0.1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Card;
