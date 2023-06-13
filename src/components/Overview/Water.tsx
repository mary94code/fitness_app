import { useState } from "react";

export default function Water() {
  const [goal, setGoal] = useState(2000);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [amountOfWater, setAmountOfWater] = useState(0);
  const [waterConsumed, setWaterConsumed] = useState(0);

  const addWaterHandler = () => {
    setIsBeingEdited(false); 
    setWaterConsumed(amountOfWater);
    setAmountOfWater(0); 
  };

  const remainingWater = goal - waterConsumed;

  return (
    <div className="water_container">
      <p>Log your water intake</p>
      <div>
        {isBeingEdited && (
          <div>
            <p>please enter the amount of water in ml</p>
            <input
              type="number"
              value={amountOfWater}
              onChange={(e) => setAmountOfWater(parseInt(e.target.value))}
            />
          </div>
        )}
        {!isBeingEdited && <button onClick={() => setIsBeingEdited(true)}>+</button>}
        {isBeingEdited && <button onClick={addWaterHandler}>+</button>}
      </div>
      <p>Your goal is min {goal} ml</p>
      {waterConsumed > 0 && <p>Today you drank: {waterConsumed} ml</p>}

      {remainingWater > 0 && <p>{remainingWater} ml remaining</p>}
      {remainingWater <= 0 && (
        <p>wow you are strong! just don't overdo it</p>
      )}
    </div>
  );
}
