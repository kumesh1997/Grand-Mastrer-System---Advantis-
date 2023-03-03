import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import cross from '../images/cross.png'
import { Button, Modal } from 'antd'
import next from '../images/next.gif'
import hufflepuff from '../images/hufflepuff.gif'
import './blink.css'

const BlinkingComponent = ({ QuestionNumber = 1, round = 1, viewed = false }) => {
    

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
	if (parseInt(QuestionNumber) % 3 === 1) {
		css = viewed
			? 'pointer-events-none bg-opacity-70'
			: 'cursor-pointer duration-75 active:scale-95'
	} else {
		css = viewed
			? 'pointer-events-none bg-opacity-70'
			: 'cursor-pointer duration-75 active:scale-95'
	}

  return (
    <div
			className={css}
			onClick={() => {
				handleClick(QuestionNumber)
			}}
		>
            {/* Ball */}
			<div className={'btn third w-16 rounded-full flex justify-evenly'}>
				{viewed ? (
					<label className='relative text-white text-xl'>
						<span className=' w-10'>{parseInt(QuestionNumber)<10? "0"+QuestionNumber : QuestionNumber}</span>
						<span className=' absolute left-0 top-0 w-8'>
							<img src={cross} alt='image' />
						</span>
					</label>
				) : (
					<label className=' text-white text-xl'>{parseInt(QuestionNumber)<10? "0"+QuestionNumber : QuestionNumber}</label>
				)}
			</div>

			{/* Modal */}
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<>
						<div onClick={handleOk} className=' flex justify-center items-center'>
							<img width={200} src={next} alt="image" />
						</div>
					</>,
				]}
			>
			<div className=' flex items-center justify-center'>
				<span><h2 style={{ color: '#433528', fontSize: '25px', fontFamily:'cursive' , fontWeight: '900' }}>Question {QuestionNumber}</h2></span>
				<span><img width={180} src={hufflepuff} alt='image' /></span>
			</div>
			
				
			</Modal>
		</div>
  )
};

export default BlinkingComponent;
