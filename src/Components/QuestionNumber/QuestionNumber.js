import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import './QuestionNumber.css'

import snitch from '../../images/snitch.gif'
import { Button, Modal } from 'antd'
import next from '../../images/next.gif'
import hufflepuff from '../../images/hufflepuff.gif'


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
		<div
			className={css}
			onClick={() => {
				handleClick(QuestionNumber)
			}}
		>
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
						<div onClick={handleOk} className=' flex justify-center items-center'>
							<img width={200} src={next} alt="image" />
						</div>
						{/* <Button key='submit' onClick={handleCancel}>
							Close
						</Button> */}
					</>,
				]}
			>
			<div className=' flex items-center justify-center'>
				<span><h2 style={{ color: '#433528', fontSize: '25px', fontFamily:'cursive' , fontWeight: '900' }}>Question {QuestionNumber}</h2></span>
				<span><img width={180} src={hufflepuff} alt='image' /></span>
			</div>
			
				
			</Modal>
		</div>
	);
}

export default QuestionNumber;
