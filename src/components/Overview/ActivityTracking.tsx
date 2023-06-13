import LineChart from "./LineChart";
import BarChart from "./BarChart";
import SpeedChart from "./SpeedChart";
export default function ActivityTracking() {
  const today = new Date();
  const date = today.getDate();
  const dayOfWeek = today.getDay();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const weekdayName = weekdays[dayOfWeek];
  const month = today.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[month];

  return (
    <div className="activity_container">
      <h2>Activity Tracking</h2>
      <div>
        <p className="todays_date">
          {weekdayName}, {date} {monthName}
        </p>
      </div>

      <div>
        <div className="calendar">
          {weekdays.map((day, index) => (
            <p key={index} className={index === dayOfWeek ? "today" : ""}>
              {day}
            </p>
          ))}
        </div>
      </div>
      <div className="activities">
        <div>
          <LineChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <SpeedChart />
        </div>
      </div>
    </div>
  );
}
