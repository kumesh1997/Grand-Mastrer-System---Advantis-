import React from "react";
import "./QuestionNumber.css";

function QuestionNumber() {
  function handleClick() {
    alert("done");
  }

  return (
    <div className="test" onClick={handleClick}>
      <div className="number">
        <label>01</label>
      </div>
    </div>
  );
}

export default QuestionNumber;
