import React from 'react'
import TimerButton from './TimerButton'
import CorrectAnswersButton from './CorrectAnswersButton'
import NextButton from './NextButton'

const BottomControlBar = ({
  TimerButtonClick,
  AnswerButtonClick,
  NextButtonClick
}) => {
  return (
    <div className=' flex justify-end relative top-52'>
        <div className=' flex justify-between'>
            <div><TimerButton OnClickHandler={() => TimerButtonClick()}/></div>
            <div><CorrectAnswersButton OnClickHandler={() => AnswerButtonClick()} /></div>
            <div><NextButton OnClickHandler={() => NextButtonClick()} /></div>
        </div>
    </div>
  )
}

export default BottomControlBar