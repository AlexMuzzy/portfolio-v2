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
          className="w-4/6 h-4/6 bg-slate-600/25 text-white/75 border-2 border-slate-600/25 rounded-xl p-3 text-xl backdrop-blur-md"
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
