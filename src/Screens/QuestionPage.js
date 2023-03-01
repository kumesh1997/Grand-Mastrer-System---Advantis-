import { useEffect, useState } from 'react'
import AnswerButton from '../Components/AnswerButton'
import BottomControlBar from '../Components/BottomControlBar'
import QuestionView from '../Components/QuestionView'
import data from '../data.json'
// import image from '/img/image.jpg';
import Image from '../images/cover2.jpeg'
import { useNavigate, useParams } from 'react-router'
import { Grid } from '@mui/material'
import TimerButton from '../Components/TimerButton'
import CorrectAnswersButton from '../Components/CorrectAnswersButton'
import NextButton from '../Components/NextButton'
import cover from '../images/loop2.mp4'
import Timer from '../Components/Timer'
import SwitchButton from '../Components/SwitchButton'

const QuestionPage = () => {
	const { QId, round } = useParams()
	const [QuestionData, setQuestionData] = useState()
	const [selectedAnswerNumber, setSelectedAnswerNumber] = useState()
	const [openTimer, setOpenTimer] = useState(false)
	const [showCorrect, setShowCorrect] = useState(false)
	const [triesAvailable, setTriesAvailable] = useState(2)
	const [progress, setProgress] = useState(0)

	const navigate = useNavigate()

	let nextPage = parseInt(QId) + 1

	const getData = () => {
		setQuestionData(data[QId - 1])
	}
	useEffect(() => {
		parseInt(round) === 3 ? setTriesAvailable(2) : setTriesAvailable(2)

		getData()
	}, [QId])

	const HandleAnswerButtonClick = async () => {
		if (selectedAnswerNumber) {
			setShowCorrect(!showCorrect)
			if (showCorrect) {
				setTriesAvailable(triesAvailable - 1)
			}

			data[QId - 1].viewed = true
		}
	}

	const HandleTimerButtonClick = () => {
		setOpenTimer(!openTimer)
	}
	const HandleNextButtonClick = () => {
		if (triesAvailable < 1) {
			resetState()
			data[QId - 1].viewed = true
			navigate(`/question/${round}/${nextPage}`)
		}
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
	}
	return (
		<Grid
			container
			style={{
				height: '100vh',
				backgroundImage: `url(${Image})`,
				backgroundRepeat: false,
			}}
			className=' bg-cover'
		>
			<Grid container className=' p-2 text-center'>
				<Timer />
			</Grid>
			<Grid
				container
				justifyContent={'center'}
				textAlign={'center'}
				alignContent={'center'}
			>
				{QuestionData && <QuestionView Question={QuestionData.question} />}
			</Grid>
			<Grid container spacing={6} textAlign={'center'} alignContent={'center'}>
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
								onClick={() => {
									// console.log('clicked')
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
				<TimerButton OnClickHandler={() => HandleTimerButtonClick()} />
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
		</Grid>
	)
}

export default QuestionPage
