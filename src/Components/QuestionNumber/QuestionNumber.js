import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './QuestionNumber.css'
import gif from '../../images/cross.gif'
import { Button, Modal } from 'antd'

function QuestionNumber({ QuestionNumber = 1, round = 1, viewed = false }) {
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setOpen(false)
		navigate(`/question/${round}/${QuestionNumber}`)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleClick = () => {
		if (parseInt(round) === 3) {
			showModal()
		} else {
			navigate(`/question/${round}/${QuestionNumber}`)
		}
	}
	let css
	if (parseInt(QuestionNumber) % 5 === 1) {
		css = viewed
			? 'pointer-events-none test2'
			: ' test2 cursor-pointer duration-75 active:scale-95'
	} else {
		css = viewed
			? 'pointer-events-none test'
			: ' test cursor-pointer duration-75 active:scale-95'
	}

	return (
		<div className={css} onClick={handleClick}>
			<div className={'number text-white cursor-pointer'}>
				{viewed ? (
					<label>
						{QuestionNumber}{' '}
						<span className=' text-4xl absolute top-0 left-0 text-red-600'>
							X
						</span>{' '}
					</label>
				) : (
					<label>{QuestionNumber}</label>
				)}
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
						<Button key='submit' onClick={handleCancel}>
							Close
						</Button>
					</>,
				]}
			>
				<h1 style={{ color: 'black' }}>{QuestionNumber}</h1>
			</Modal>
		</div>
	)
}

export default QuestionNumber
