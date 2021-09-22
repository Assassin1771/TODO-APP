import React from "react";
import Circle from "react-circle";

const Length = ({ todos }) => {
  return (
    <div>
      TOTAL TASKS PENDING :
      <Circle
        animate={true}
        progress={todos.length}
        showPercentageSymbol={false}
      />
    </div>
  );
};

export default Length;
