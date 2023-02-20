import React from "react";
import { useNavigate } from "react-router";
import "./QuestionNumber.css";

function QuestionNumber({
  QuestionNumber = 1
}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/questionpage/${QuestionNumber}`)
  }

  return (
    <div className="test" onClick={handleClick}>
      <div className="number">
        <label>{QuestionNumber}</label>
      </div>
    </div>
  );
}

export default QuestionNumber;
