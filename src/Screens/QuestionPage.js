import { useEffect, useRef, useState } from 'react'
import AnswerButton from '../Components/AnswerButton'
import BottomControlBar from '../Components/BottomControlBar'
import QuestionView from '../Components/QuestionView'
import data from '../data.json'
// import image from '/img/image.jpg';
import Image from '../images/hwts.jpg'
import { useNavigate, useParams } from 'react-router'
import { Grid } from '@mui/material'
import TimerButton from '../Components/TimerButton'
import CorrectAnswersButton from '../Components/CorrectAnswersButton'
import NextButton from '../Components/NextButton'
import cover from '../images/loop2.mp4'
import Timer from '../Components/Timer'
import SwitchButton from '../Components/SwitchButton'
import './HomeScreen/HomeScreen.css'
import { Button, Modal } from 'antd'
import Win from '../images/win.gif'

const QuestionPage = () => {
	const { QId, round } = useParams()
	const [QuestionData, setQuestionData] = useState()
	const [selectedAnswerNumber, setSelectedAnswerNumber] = useState()
	const [openTimer, setOpenTimer] = useState(false)
	const [showCorrect, setShowCorrect] = useState(false)
	const [triesAvailable, setTriesAvailable] = useState(2)
	const [lockedAnswers, setLockedAnswers] = useState([])
	const [progress, setProgress] = useState(0)
	const childRef = useRef()

	const navigate = useNavigate()
	const [open, setOpen] = useState(false)

	// Close Model
	const showModal = () => {
		setOpen(true)
	}

	// Handle OK
	const handleOk = () => {
		setOpen(false)
	}
	const handleCancel = () => {
		setOpen(false)
	}

	let nextPage = parseInt(QId) + 1

	const getData = () => {
		setQuestionData(data[QId - 1])
	}
	useEffect(() => {
		parseInt(round) === 3 ? setTriesAvailable(2) : setTriesAvailable(1)

		getData()
	}, [QId])

	const HandleAnswerButtonClick = async () => {
		if (selectedAnswerNumber) {
			setShowCorrect(!showCorrect)
			if (showCorrect) {
				const array = [...lockedAnswers, selectedAnswerNumber]
				setLockedAnswers(array)
				setSelectedAnswerNumber(null)
			} else {
				setTriesAvailable(triesAvailable - 1)
				if (selectedAnswerNumber === QuestionData.answer) {
					// alert('success')
					showModal();
				}
			}
		}
	}

	const HandleTimerButtonClick = () => {
		setOpenTimer(!openTimer)
	}
	const HandleNextButtonClick = () => {
		if (triesAvailable < 1) {
			resetState()
			data[QId - 1].viewed = true
		}
		navigate(`/questionbank/${round}`)
	}

	const HandleSwitchButtonClick = async () => {
		data.map((item, index) => {
			if (item.id === parseInt(QId)) {
				item.viewed = true
			}
		})
		navigate(`/questionbank/${round}`)
	}
	const resetState = () => {
		parseInt(round) === 3 ? setTriesAvailable(2) : setTriesAvailable(1)
		setOpenTimer(false)
		setShowCorrect(false)
		setSelectedAnswerNumber(null)
		setLockedAnswers([])
	}

	// console.log(QuestionData)
	return (
		<Grid
			container
			style={{
				height: '100vh',
				// backgroundImage: `url(${Image})`,
				// backgroundRepeat: false,
				alignContent: 'space-between',
			}}
			className='home-container p-2'
		>
			<video src={cover} autoPlay loop muted />
			<Grid container className=' p-2 text-center'>
				<Timer ref={childRef} />
			</Grid>
			<Grid
				container
				justifyContent={'center'}
				textAlign={'center'}
				alignContent={'center'}
				maxWidth
			>
				{QuestionData && QuestionData.image && (
					<img
						width={370}
						className=' border-white border-2'
						src={QuestionData.image}
						alt='image'
					/>
				)}
			</Grid>
			<Grid
				container
				justifyContent={'center'}
				textAlign={'center'}
				alignContent={'center'}
			>
				{QuestionData && <QuestionView Question={QuestionData.question} />}
			</Grid>
			<Grid container spacing={2} textAlign={'center'} alignContent={'center'}>
				{QuestionData &&
					QuestionData.answers.map((item, index) => {
						return (
							<AnswerButton
								key={index}
								AnswerNumber={index + 1}
								Answer={item}
								triesAvailable={triesAvailable}
								showCorrect={showCorrect}
								CorrectAnswer={QuestionData.answer}
								SelectedAnswerNumber={selectedAnswerNumber}
								lockedAnswers={lockedAnswers}
								onClick={() => {
									// console.log('clicked')
									childRef.current.StopTheWatch()
									setSelectedAnswerNumber(index + 1)
								}}
							/>
						)
					})}
			</Grid>
			<Grid container justifyContent={'flex-end'}>
				{parseInt(round) === 3 && (
					<SwitchButton OnClickHandler={() => HandleSwitchButtonClick()} />
				)}
				{/* <TimerButton OnClickHandler={() => HandleTimerButtonClick()} /> */}
				<CorrectAnswersButton
					showCorrect={showCorrect}
					OnClickHandler={() => HandleAnswerButtonClick()}
				/>
				{parseInt(QId) !== data.length ? (
					<NextButton OnClickHandler={() => HandleNextButtonClick()} />
				) : (
					<SwitchButton OnClickHandler={() => HandleSwitchButtonClick()} />
				)}
			</Grid>

			{/* Modal */}
			<Modal
				open={ round == 1 ? open : ''}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<>
						{/* <Button key='submit' className=' bg-red-600 text-white font-semibold' onClick={handleCancel}>
							Close
						</Button> */}
					</>,
				]}
			>
				<div className=' flex justify-center align-middle'>
					<img src={Win} width={200} alt='image' />
				</div> 
				<div className=' text-center font-semibold text-green-600 text-xl'><h5>You Won 10 Points</h5></div>
			</Modal>
		</Grid>
	)
}

export default QuestionPage
