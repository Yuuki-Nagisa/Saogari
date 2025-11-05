import HeroComponent from "./HeroComponent";
import { motion } from "motion/react";
import logo from "../public/logo.png";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <div className="h-[1200px] md:h-[600px] p-10 md:p-20 text-center flex flex-col items-center justify-center bg-black">
        <h1 className="font-bold text-5xl text-green-500">About Us</h1>
        <div className="w-30 h-2 bg-green-500 my-6"></div>
        <div className="flex flex-col md:flex-row items-center mt-4 h-full">
          <motion.div
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -20, scale: 1.02, transition: { duration: 0.3 } }}
            className="w-5/6 md:w-1/2 mt-2 text-lg md:text-2xl bg-gray-900 rounded-3xl flex flex-col p-4 items-center justify-center shadow-lg shadow-[#1a1c1e] "
          >
            <h1 className="text-4xl font-semibold mb-4">
              Welcome to{" "}
              <span className="text-green-500 font-bold">Saogari</span>
            </h1>
            The Photography Club is a vibrant community of students passionate
            about capturing moments, exploring creative angles, and learning
            camera skills. Through photo walks, workshops, and exhibitions,
            members share ideas and showcase their best shots.{" "}
          </motion.div>
        </div>
      </div>
      <div className="h-[600px] w-full bg-[#1a1c1e] flex justify-center p-10">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-40 rounded-2xl object-cover "
        />
      </div>
    </>
  );
};

export default Home;
