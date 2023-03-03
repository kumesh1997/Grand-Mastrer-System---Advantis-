import React, { useState } from 'react'
import QuestionNumber from '../../Components/QuestionNumber/QuestionNumber'
import hufflepuff from '../../images/hufflepuff.gif'
import './QuestionBank.css'
import data from '../../data.json'
import Image from '../../images/cover.jpg'
import { useNavigate, useParams } from 'react-router'
import { Button } from '@mui/material'
import { Modal } from 'antd'

function QuestionBank() {
	const { round } = useParams()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const [questionNumber, setQuestionNumber] = useState()
	const showModal = () => {
		setOpen(true)
	}
	const setQuestion = (Number) => {
		setQuestionNumber(Number)
	}
	const handleOk = () => {
		setOpen(false)
		navigate(`/question/${round}/${questionNumber}`)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleClick = (Number) => {
		setQuestion(Number)
		if (parseInt(round) === 3) {
			showModal()
		} else {
			navigate(`/question/${round}/${Number}`)
		}
	}
	return (
		<>
			{' '}
			<div
				className=' text-start fixed min-h-full min-w-full bg-cover bg-opacity-50'
				style={{
					backgroundImage: `url(${Image})`,
					backgroundRepeat: false,
				}}
			>
				<div className='grid-container'>
					{data.map((item, index) => {
						return (
							<div className='grid-item' key={index}>
								<QuestionNumber
									viewed={item.viewed}
									QuestionNumber={item.id}
									round={round}
									handleClick={handleClick}
								/>
							</div>
						)
					})}
				</div>
			</div>
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<>
						<Button key='submit' onClick={handleOk}>
							Go To Question
						</Button>
						<Button key='cancel' onClick={handleCancel}>
							Close
						</Button>
					</>,
				]}
			>
				<div className=' flex justify-evenly align-middle'>
					<span>
						<h2 style={{ color: 'black' }}>Question {questionNumber}</h2>
					</span>
					<span>
						<img width={200} src={hufflepuff} alt='image' />
					</span>
				</div>
			</Modal>
		</>
	)
}

export default QuestionBank
