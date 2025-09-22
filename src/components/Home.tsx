import HeroComponent from "./HeroComponent";
import { motion, useScroll, useTransform } from "motion/react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.8], [0.9, 1.4, 1]);
  return (
    <>
      <HeroComponent />
      <div className="h-[600px] p-8 text-center flex flex-col items-center ">
        <motion.div
          style={{ scale }}
          className="w-5/6 md:w-1/2 mt-2 text-2xl bg-[#1a1c1e]/50 border-green-500 border-l-3 border-r-4 rounded-3xl flex flex-col p-4 items-center justify-center shadow-lg shadow-blue-500/50 backdrop-blur-md"
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-green-500">Saogari</span>
          </h1>
          The Photography Club is a vibrant community of students passionate
          about capturing moments, exploring creative angles, and learning
          camera skills. Through photo walks, workshops, and exhibitions,
          members share ideas and showcase their best shots.{" "}
        </motion.div>
      </div>
      <div className="h-[600px] w-full bg-[#1a1c1e] relative">
        <div className="absolute top-0 left-0 flex items-center justify-center bg-green-500 w-3/4 h-15 border-b-5 border-green-700 rounded-br-4xl"></div>
        <div className="absolute top-15 left-0 flex items-center justify-center bg-green-500 w-3/5 h-15 border-b-5 border-green-700 rounded-br-4xl"></div>
        <div className="absolute top-30 left-0 flex items-center justify-center bg-green-500 w-3/6 h-15 border-b-5 border-green-700 rounded-br-4xl"></div>
        <div className="absolute bottom-0 right-0 flex items-center justify-center bg-green-500 w-3/4 h-15 border-b-5 border-green-700 rounded-tl-4xl"></div>
        <div className="absolute bottom-15 right-0 flex items-center justify-center bg-green-500 w-3/5 h-15 border-b-5 border-green-700 rounded-tl-4xl"></div>
        <div className="absolute bottom-30 right-0 flex items-center justify-center bg-green-500 w-3/6 h-15 border-b-5 border-green-700 rounded-tl-4xl"></div>
      </div>
    </>
  );
};

export default Home;
