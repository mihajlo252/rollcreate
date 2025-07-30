import { motion } from "framer-motion";

export const Popup = ({ children, closerFunc }) => {
  return (
    <motion.div
      className="fixed left-0 top-0 isolate z-50 box-border flex h-full w-full flex-col items-center justify-center gap-5 px-36 py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0 }}
    >
      
      <div className="margin-0 padding-0 absolute inset-0 z-[-1] bg-black/80" onClick={() => closerFunc(false)}></div>
      {children}
    </motion.div>
  );
};
