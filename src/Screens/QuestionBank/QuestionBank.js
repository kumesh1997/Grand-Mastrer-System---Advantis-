import React from "react";
import QuestionNumber from "../../Components/QuestionNumber/QuestionNumber";
import "./QuestionBank.css";
import data from '../../data.json'
import Image from '../../images/QB-BG.jpg';

function QuestionBank() {
  return (
    <div className=" text-center fixed min-h-full min-w-full bg-cover " style={{
      backgroundImage: `url(${Image})`,
      backgroundRepeat: false,
  }} >
      <div class="grid-container overflow-y-auto">
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
