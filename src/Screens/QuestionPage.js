import { useEffect, useState } from 'react'
import AnswerButton from '../Components/AnswerButton'
import BottomControlBar from '../Components/BottomControlBar'
import QuestionView from '../Components/QuestionView'
import data from '../data.json'
// import image from '/img/image.jpg';
import Image from '../images/Hogwarts.jpg'
import { useNavigate, useParams } from 'react-router'
import { Grid } from '@mui/material'
import TimerButton from '../Components/TimerButton'
import CorrectAnswersButton from '../Components/CorrectAnswersButton'
import NextButton from '../Components/NextButton'

const QuestionPage = () => {
	const { QId, round } = useParams()

	const [DummyState, setDummyState] = useState()
	const [QuestionData, setQuestionData] = useState()
	const [selectedAnswerNumber, setSelectedAnswerNumber] = useState()
	const [openTimer, setOpenTimer] = useState(false)
	const [correct, setCorrect] = useState(false)
	const [progress, setProgress] = useState(0)

	const navigate = useNavigate()

	let nextPage = parseInt(QId) + 1
	let isCorrect = false

	const getData = () => {
		setQuestionData(data[QId - 1])
	}
	console.log(selectedAnswerNumber)
	useEffect(() => {
		getData()
		// const timer = setInterval(() => {
		// 	setProgress((prevProgress) =>
		// 		prevProgress >= 100 ? 1 : prevProgress + 1
		// 	)
		// }, 100)

		// return () => {
		// 	clearInterval(timer)
		// }
	}, [])

	const HandleAnswerButtonClick = () => {
		// alert(selectedAnswerNumber)
		console.log(
			'Selected -> ',
			selectedAnswerNumber,
			'Answer ->',
			QuestionData.answer
		)
		if (selectedAnswerNumber === QuestionData.answer) {
			// setCorrect(true);
			isCorrect = true
			console.log('Your Answer is True')
			alert('Your Answer is True')
		} else {
			// setCorrect(false);
			isCorrect = false
			console.log('Your Answer is False')
			alert('Your Answer is False')
		}
		setDummyState(Math.random())
		console.log(isCorrect)
	}

	const HandleTimerButtonClick = () => {
		setOpenTimer(!openTimer)
	}
	const HandleNextButtonClick = () => {
		navigate(`/questionbank/${round}`)
	}

	return (
		<Grid
			container
			style={{
				height: '100vh',
				backgroundImage: `url(${Image})`,
				backgroundRepeat: false,
			}}
		>
			<Grid container className=' p-2'>
				{/* { openTimer? <LinearProgressWithLabel value={progress} /> : null} */}
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
								CorrectAnswer={QuestionData.answer}
								Selected={selectedAnswerNumber}
								onClick={() => {
									console.log('clicked')
									setSelectedAnswerNumber(index + 1)
								}}
							/>
						)
					})}
			</Grid>
			<Grid container justifyContent={'flex-end'}>
				<TimerButton OnClickHandler={() => HandleTimerButtonClick()} />
				<CorrectAnswersButton
					OnClickHandler={() => HandleAnswerButtonClick()}
				/>
				<NextButton OnClickHandler={() => HandleNextButtonClick()} />
			</Grid>
		</Grid>
	)
}

export default QuestionPage
