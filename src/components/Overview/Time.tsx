import { BiTimeFive } from "react-icons/bi";

export default function Time() {
  return (
    <div className="time_container">
      <BiTimeFive className="time_icon"/>
      <p className="time">Time</p>
      <p className="mins">56 min</p>
    </div>
  );
}
