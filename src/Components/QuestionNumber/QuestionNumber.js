import React from 'react'
import { useNavigate } from 'react-router'
import './QuestionNumber.css'
import gif from '../../images/cross.gif'

function QuestionNumber({ QuestionNumber = 1, round = 1 , viewed = false }) {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/question/${round}/${QuestionNumber}`)
	}

	return (
		<div className={viewed? 'pointer-events-none test' : ' test cursor-pointer duration-75 active:scale-95' } onClick={handleClick}>
			<div className={'number text-white cursor-pointer'}>
				 { viewed?  <label>{QuestionNumber} <span className=' text-4xl absolute top-0 left-0 text-red-600'>X</span> </label>  : <label>{ QuestionNumber}</label>}
			</div>
		</div>
	)
}

export default QuestionNumber
