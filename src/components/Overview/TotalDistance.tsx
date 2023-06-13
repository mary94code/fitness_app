import { RiPinDistanceFill } from "react-icons/ri";

export default function TotalDistance() {
  return (
    <div className="distance_container">
      <RiPinDistanceFill className="distance_icon" />
      <p className="distance">Total distance</p>
      <p className="length">15h 5km</p>
    </div>
  );
}
