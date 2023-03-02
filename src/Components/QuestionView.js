import React from 'react'

const QuestionView = ({
	Question = 'A 42-year-old man with acute renal failure is confused. His serum potassium is 8.1 mEq/L . The most likely abnormal ECG finding is A 42-year-old man with acute renal failure is confused. His serum potassium is 8.1 mEq/L . The most likely abnormal ECG finding is',
}) => {
	return (
		<div
			className=' bg-white text-center rounded-md opacity-80'
			style={{ width: '95%', paddingTop: 30, paddingBottom: 30, paddingLeft: 30, paddingRight: 30 }}
		>
			<h3 className=' text-2xl leading-9 tracking-wide text-justify font-semibold'>{Question} </h3>
		</div>
	)
}

export default QuestionView
