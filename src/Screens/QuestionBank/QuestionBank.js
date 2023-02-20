import React from "react";
import QuestionNumber from "../../Components/QuestionNumber/QuestionNumber";
import "./QuestionBank.css";

function QuestionBank() {
  return (
    <div>
      <div class="grid-container">
        <div class="grid-item">
          <QuestionNumber></QuestionNumber>
        </div>
        <div class="grid-item">
          <QuestionNumber></QuestionNumber>
        </div>
        <div class="grid-item">
          <QuestionNumber></QuestionNumber>
        </div>
        <div class="grid-item">
          <QuestionNumber></QuestionNumber>
        </div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div>
    </div>
  );
}

export default QuestionBank;
