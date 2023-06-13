import BarChart from "../components/distance/BarChart";
import "../styles/_distance.scss";

import LeftSidebar from "../components/Overview/LeftSidebar";

const Distance = () => {
  return (
    <div className="main_wrapper">
      <LeftSidebar />
        <BarChart />
       </div>
  );
};

export default Distance;
