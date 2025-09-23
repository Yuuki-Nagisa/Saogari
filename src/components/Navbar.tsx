import { motion } from "motion/react";
import logo from "../public/logo.png";
import { useTabStore } from "../store";
//backdrop-blur-md to add blur effect
const Navbar = () => {
  const tabs = ["Home", "PeakShots", "Events", "Team", "Gallery"];
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <motion.header className="fixed z-10 w-5/6 flex justify-around p-2 bg-[#1a1c1e]/50 border-b-4 border-l-7 border-r-10 border-b-green-600 border-r-blue-500 border-l-blue-500 rounded-4xl ">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="cursor-pointer">
          <span className="ml-5 text-white font-bold text-3xl uppercase">
            Saogari
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`text-white font-semibold text-xl cursor-pointer hover:border-b-white hover:border-b-2 hover:font-bold ${
              activeTab.match(tab) ? "border-b-2 font-bold" : ""
            } transition duration-200 mx-2 `}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;
