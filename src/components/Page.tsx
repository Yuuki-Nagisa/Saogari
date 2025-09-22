import Navbar from "./Navbar";
import { useTabStore } from "../store";
import Events from "./Events";
import Home from "./Home";

const Page = () => {
  const { activeTab } = useTabStore();
  return (
    <div className="text-white">
      <div className="flex justify-center">
        <Navbar />
      </div>

      {activeTab.match("Home") && <Home />}
      {activeTab.match("Events") && <Events />}
    </div>
  );
};

export default Page;
