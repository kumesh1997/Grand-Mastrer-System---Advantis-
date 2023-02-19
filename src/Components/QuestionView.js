import React from 'react'

const QuestionView = ({
    Question = "A 42-year-old man with acute renal failure is confused. His serum potassium is 8.1 mEq/L . The most likely abnormal ECG finding is A 42-year-old man with acute renal failure is confused. His serum potassium is 8.1 mEq/L . The most likely abnormal ECG finding is"
}) => {
  return (
    <div className=' bg-white text-center p-2 rounded-md opacity-80'>
        <h3>{Question}  </h3>
    </div>
  )
}

export default QuestionView