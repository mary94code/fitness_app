import { NavLink } from "react-router-dom";
import { BsFillHouseDoorFill, BsFillCalendarWeekFill } from "react-icons/bs";
import { MdEnergySavingsLeaf, MdAccountCircle, MdLogout } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
export default function LeftSidebar() {
  return (
    <nav>
      <NavLink to={"/"}>
        <BsFillHouseDoorFill className="nav_icon" />
        Overview
      </NavLink>
      <NavLink to={"/energy"}>
        <MdEnergySavingsLeaf className="nav_icon" />
        Energy
      </NavLink>
      <NavLink to={"/calendar"}>
        <BsFillCalendarWeekFill className="nav_icon" />
        Calendar
      </NavLink>
      <NavLink to={"/distances"}>
        <GiPathDistance className="nav_icon" />
        Distances
      </NavLink>
      <NavLink to={"/profile"}>
        <MdAccountCircle className="nav_icon" />
        Profile
      </NavLink>
      <NavLink to={"/logout"}>
        <MdLogout className="nav_icon" />
        Logout
      </NavLink>
    </nav>
  );
}
