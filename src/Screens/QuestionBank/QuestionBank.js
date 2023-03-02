import React from 'react'
import QuestionNumber from '../../Components/QuestionNumber/QuestionNumber'
import './QuestionBank.css'
import data from '../../data.json'
import Image from '../../images/cover.jpg'
import { useParams } from 'react-router'
import { Button } from '@mui/material'

function QuestionBank() {
	const { round } = useParams()

	return (
		<div
			className=' text-start fixed min-h-full min-w-full bg-cover bg-opacity-50'
			style={{
				backgroundImage: `url(${Image})`,
				backgroundRepeat: false,
			}}
		>
			<div class='grid-container'>
				{data.map((item, index) => {
					return (
						<div class='grid-item' key={index}>
							<QuestionNumber
								viewed={item.viewed}
								QuestionNumber={item.id}
								round={round}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default QuestionBank
