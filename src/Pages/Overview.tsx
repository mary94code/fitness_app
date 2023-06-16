import Time from "../components/Overview/Time";
import TotalDistance from "../components/Overview/TotalDistance";
import EnergyBurn from "../components/Overview/EnergyBurn";
import Sleep from "../components/Overview/Sleep";
import Water from "../components/Overview/Water";
import ActivityTracking from "../components/Overview/ActivityTracking";
import LeftSidebar from "../components/Overview/LeftSidebar";
import Greetings from "../components/Overview/Greetings";



export default function Overview() {
  

  
  return (
    <div className="main_wrapper">
      <LeftSidebar />

      <div className="middle_component">
        <div className="central_component">
          <div className="greeting_component">
            <Greetings />
          </div>
          <div className="flex_card details_container">
            <Time />
            <TotalDistance />
            <EnergyBurn />
            <Sleep />
          </div>
          <div className="water">
            <Water />
          </div>
        </div>
        <div className="right_sidebar">
          <ActivityTracking />
        </div>
      </div>
    </div>
  );
}
