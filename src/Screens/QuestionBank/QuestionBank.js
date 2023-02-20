import React from "react";
import QuestionNumber from "../../Components/QuestionNumber/QuestionNumber";
import "./QuestionBank.css";
import data from '../../data.json'

function QuestionBank() {
  return (
    <div>
      <div class="grid-container">
      {
        data.map((item, index) => {
          return <div class="grid-item" key={index}>
                  <QuestionNumber QuestionNumber={item.id} />
                </div>
        })
      }
      </div>
    </div>
  );
}

export default QuestionBank;
