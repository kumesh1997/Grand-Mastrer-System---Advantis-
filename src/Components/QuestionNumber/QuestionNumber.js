import './QuestionNumber.css'
import cross from '../../images/cross.png'
import snitch from '../../images/snitch.gif'
import { Button, Modal } from 'antd'
import next from '../../images/next.gif'
import hufflepuff from '../../images/hufflepuff.gif'
import { useNavigate } from 'react-router'
import { useState } from 'react'

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
	if (parseInt(QuestionNumber) % 3 === 1) {
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
						<span>
							{parseInt(QuestionNumber) < 10
								? '0' + QuestionNumber
								: QuestionNumber}
						</span>
						<span className=' absolute w- top-1 left-0 text-red-600'>
							<img width={100} src={cross} alt='image' />
						</span>{' '}
					</label>
				) : (
					<label>
						{parseInt(QuestionNumber) < 10
							? '0' + QuestionNumber
							: QuestionNumber}
					</label>
				)}
			</div>
			<Modal
				open={open}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<>
						<div
							onClick={handleOk}
							className=' flex justify-center items-center'
						>
							<img width={200} src={next} alt='image' />
						</div>
					</>,
				]}
			>
				<div className=' flex items-center justify-center'>
					<span>
						<h2
							style={{
								color: '#433528',
								fontSize: '25px',
								fontFamily: 'cursive',
								fontWeight: '900',
							}}
						>
							Question {QuestionNumber}
						</h2>
					</span>
					<span>
						<img width={180} src={hufflepuff} alt='image' />
					</span>
				</div>
			</Modal>
		</div>
	)
}

export default QuestionNumber
