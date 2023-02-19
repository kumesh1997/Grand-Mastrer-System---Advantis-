import React, { useState } from 'react'

const AnswerButton = ({
    Answer = "Answer",
    AnswerNumber = 0,
    AnswerError = false,
    Selected = false,
    HandleOnClick
}) => {

  const [ buttonClicked, setButtonClicked ] = useState(false); 
  const inSideClickHandle = () => {
    setButtonClicked(!buttonClicked);
    HandleOnClick();
    console.log(buttonClicked)
  }

  // AnswerError? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100   text-white m-2` : ` bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100   text-black m-2` 
  return (
    <div 
    className={ AnswerError? `bg-Red text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2` : (buttonClicked? ' bg-Dark-Yellow text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-white m-2' : ' bg-white text-center p-2 rounded-lg shadow-xl hover:scale-105 duration-100 text-black m-2')} onClick={inSideClickHandle}  >
        <button className=' w-full' >[ {AnswerNumber} ]  {Answer}</button>
    </div>
  )
}

export default AnswerButton