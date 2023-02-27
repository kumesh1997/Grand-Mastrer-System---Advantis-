import React from 'react'
import { useNavigate } from 'react-router'
import './QuestionNumber.css'

function QuestionNumber({ QuestionNumber = 1, round = 1 }) {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/question/${round}/${QuestionNumber}`)
	}

	return (
		<div className='test cursor-pointer' onClick={handleClick}>
			<div className='number'>
				<label>{QuestionNumber}</label>
			</div>
		</div>
	)
}

export default QuestionNumber
