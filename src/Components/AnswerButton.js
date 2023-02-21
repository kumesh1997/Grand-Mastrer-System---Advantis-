import React, { useState } from 'react'

const AnswerButton = ({
    Answer = "Answer",
    AnswerNumber = 0,
    CorrectAnswer = false,
    Selected = false,
    HandleOnClick
}) => {

  const [ buttonClicked, setButtonClicked ] = useState(0); 
  const inSideClickHandle = () => {
    setButtonClicked(buttonClicked+1);
    HandleOnClick();
    // console.log(buttonClicked)
  }

  // AnswerError? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100   text-white m-2` : ` bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100   text-black m-2` 

  // !buttonClicked ? `bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-black m-2` :
  // !CorrectAnswer ? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2` :
  //   buttonClicked && CorrectAnswer ? `bg-green-600 text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2` :
  //     `bg-Dark-Yellow text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2`



                //  CorrectAnswer ? `bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-black m-2` :
                //   buttonClicked ? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2` :
                //     CorrectAnswer && buttonClicked ? `bg-green-600 text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2` :
                //       `bg-Dark-Yellow text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2`

  return (
    <div 
    className={  
      CorrectAnswer? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2 w-9` : (buttonClicked === 1 ? ' bg-Dark-Yellow text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2' : ' bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-black m-2') } 
                onClick={inSideClickHandle}  >
        <button className=' w-full' >[ {AnswerNumber} ]  {Answer}</button>
    </div>
  )
}

export default AnswerButton