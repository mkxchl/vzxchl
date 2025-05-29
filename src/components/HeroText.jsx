import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Front End", "Database Administrator", "Back End"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center justify-center z-10 mt-20 text-center md:mt-40 rounded-3xl bg-clip-text">

      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <div className="flex justify-center">
          <img 
            src="https://vzxchl.vercel.app/assets/img/PCT_MKXX.jpg" 
            alt="Marchell Kevandra" 
            className="w-1/3 rounded-full grayscale"
          />
        </div>
        <motion.h1
          className="text-4xl font-medium mt-5"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Marchell Kevandra
        </motion.h1>
        <div className="flex flex-col items-center">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Programmer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-6xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col justify-center items-center space-y-6 md:hidden">
        <div className="flex justify-center">
          <img 
            src="https://vzxchl.vercel.app/assets/img/PCT_MKXX.jpg" 
            alt="Marchell Kevandra" 
            className="w-1/2 rounded-full" 
          />
        </div>
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, Marchell Kevandra
        </motion.p>
        <div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Programmer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default HeroText;