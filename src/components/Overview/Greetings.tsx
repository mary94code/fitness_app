import React from "react";

const Greetings = () => {
  const name = localStorage.getItem("name");
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 21 || currentHour < 3) {
    greeting = "Good Night";
  } else if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <h2>
        {greeting} {name}
      </h2>
    </div>
  );
};

export default Greetings;
