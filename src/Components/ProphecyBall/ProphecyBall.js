// import '../ProphecyBall/prophecyBall.css'
import cross from '../../images/cross.png'
import Image from '../../images/sward.png'
import Ball from '../../images/ball.png'
import { Button, Modal } from 'antd'
import next from '../../images/next.gif'
import hufflepuff from '../../images/hufflepuff.gif'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const ProphecyBall = ({ QuestionNumber = 1, round = 1, viewed = false }) => {

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
			? 'pointer-events-none '
			: 'cursor-pointer duration-75 active:scale-95'
	} else {
		css = viewed
			? 'pointer-events-none'
			: 'cursor-pointer duration-75 active:scale-95'
	}

  return (
    <div
			className={css}
			onClick={() => {
				handleClick(QuestionNumber)
			}}
		>
			{/* ProphecyBall */}
			<div className=' relative'>
				<div
					style={{
						height: '80px',
						width : '80px',
						backgroundImage: `url(${Ball})`,
						backgroundRepeat: false,
						alignContent: 'space-between',
						cursor: 'pointer'
					}}
					className=' bg-cover object-cover relative'
				>
					<div className=' absolute top-4 left-7 text-white text-2xl font-bold'>
						{
							viewed? (
								<label className=' cursor-pointer'>
									<span className=''>
										{parseInt(QuestionNumber) < 10
											? '0' + QuestionNumber
											: QuestionNumber}
									</span>
								</label>
							) : (
								<label className=' cursor-pointer'>
									{parseInt(QuestionNumber) < 10
										? '0' + QuestionNumber
										: QuestionNumber}
								</label>
							)
						}
					</div>
				</div>
				{
					viewed? 
					<div>
						<span className=' absolute top-0 left-0 '>
							<img width={150} src={Image} alt='image' />
						</span>{' '}
					</div>
					: null
				}
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

export default ProphecyBall