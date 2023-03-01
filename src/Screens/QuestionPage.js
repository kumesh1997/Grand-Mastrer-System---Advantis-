import React, { useState } from 'react'
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

	const [DummyState, setDummyState] = useState()
	const [QuestionData, setQuestionData] = useState()
	const [selectedAnswerNumber, setSelectedAnswerNumber] = useState()
	const [openTimer, setOpenTimer] = useState(false)
	const [correct, setCorrect] = useState(false)
	const [progress, setProgress] = useState(0)

	const navigate = useNavigate()

	let nextPage = parseInt(QId) + 1
	let reviewAnswer = false

	const getData = () => {
		setQuestionData(data[QId - 1])
		setCorrect(data[QId - 1].answer);
	}
	console.log(selectedAnswerNumber)
	React.useEffect(() => {
		getData()
		// const timer = setInterval(() => {
		// 	setProgress((prevProgress) =>
		// 		prevProgress >= 100 ? 1 : prevProgress + 1
		// 	)
		// }, 100)

		// return () => {
		// 	clearInterval(timer)
		// }
	}, [reviewAnswer])

	const HandleAnswerButtonClick = async () => {
		if (selectedAnswerNumber === QuestionData.answer) {
			// setCorrect(true);
			reviewAnswer = true
			console.log('Your Answer is True')
			alert('Your Answer is True')
		} else {
			// setCorrect(false);
			reviewAnswer = false
			console.log('Your Answer is False')
			alert('Your Answer is False')
		}
		setDummyState(Math.random())
		console.log(reviewAnswer)
		await data.map((item, index) => {
			if(item.id === parseInt(QId)){
				item.viewed=true;
			}
		});
	}

	const HandleTimerButtonClick = () => {
		setOpenTimer(!openTimer)
	}

	const HandleNextButtonClick = () => {
		navigate(`/questionbank/${round}`)
	}

	const HandleSwitchButtonClick = async () => {
		await data.map((item, index) => {
			if(item.id === parseInt(QId)){
				item.viewed=true;
			}
		});
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
								CorrectAnswer={QuestionData.answer}
								Selected={selectedAnswerNumber}
								reviewAnswer={reviewAnswer}
								onClick={() => {
									// console.log('clicked')
									setSelectedAnswerNumber(index + 1)
								}}
							/>
						)
					})}
			</Grid>
			<Grid container justifyContent={'flex-end'}>
				{ parseInt(round) === 3 && <SwitchButton OnClickHandler={() => HandleSwitchButtonClick()} />}
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
