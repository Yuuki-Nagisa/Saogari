import { motion, useScroll, useTransform } from "motion/react";
import bgHome from "../public/bgHome.jpg";
const nameSite = "Saogari";
const parentVariants = {
  hidden: { opacity: 0.5, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const HeroComponent = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1.5]);
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <motion.img
        src={bgHome}
        alt="Background"
        className=" fixed object-cover w-full h-full -z-10 rounded-3xl"
        style={{ scale }}
      />
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="relative flex justify-between w-4/5 text-xl md:text-8xl font-bold uppercase"
      >
        {nameSite.split("").map((char, index) => (
          <motion.h2
            key={index}
            variants={{
              hidden: { opacity: 0, y: -200, scale: 1, rotate: 0 },
              visible: {
                opacity: 1,
                y: [-100, -50, 0],
                scale: [1, 2],
                rotate: [0, 360],
              },
            }}
          >
            {char}
          </motion.h2>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroComponent;
