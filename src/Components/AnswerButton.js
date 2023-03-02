import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router'

const AnswerButton = ({
	Answer = 'Answer',
	AnswerNumber = 0,
	CorrectAnswer = 1,
	SelectedAnswerNumber,
	lockedAnswers,
	showCorrect = false,
	triesAvailable,
	onClick,
}) => {
	const [buttonClicked, setButtonClicked] = useState(false)
	const inSideClickHandle = () => {
		setButtonClicked(!buttonClicked)
		onClick()
	}

	const buttonCommonCss = {
		width: '95%',
		height: '110px',
		opacity: '0.9',
		borderRadius: 50,
		color: 'black',
		fontWeight: 400,
		fontSize: '1.2em',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: 'black',
		},
	}
	return (
		<Grid item sm={6} onClick={inSideClickHandle}>
			<Box boxShadow={2} >
			<Button
				variant='contained'
				sx={{
					...buttonCommonCss,
					backgroundColor:
						parseInt(triesAvailable) < 1 && AnswerNumber === CorrectAnswer
							? '#075716' //green color
							: showCorrect &&
							  SelectedAnswerNumber === AnswerNumber &&
							  AnswerNumber === CorrectAnswer
							? '#075716' //green color
							: showCorrect &&
							  SelectedAnswerNumber === AnswerNumber &&
							  AnswerNumber !== CorrectAnswer
							? 'red'
							: !showCorrect && SelectedAnswerNumber === AnswerNumber
							? '#E4A11B' //brown color
							: lockedAnswers.find((value) => value === AnswerNumber)
							? 'grey'
							: 'white',

					color:
						parseInt(triesAvailable) < 1 && AnswerNumber === CorrectAnswer
							? 'white' //green color
							: showCorrect &&
							  SelectedAnswerNumber === AnswerNumber &&
							  AnswerNumber === CorrectAnswer
							? 'white' //green color
							: showCorrect &&
							  SelectedAnswerNumber === AnswerNumber &&
							  AnswerNumber !== CorrectAnswer
							? 'white'
							: !showCorrect && SelectedAnswerNumber === AnswerNumber
							? 'white' //brown color
							: lockedAnswers.find((value) => value === AnswerNumber)
							? 'white'
							: 'black',
				}}
				
			>
			<div className=' relative flex '>
				<div className=' absolute float-left top-6 left-0 mr-6 h-6 w-6 rounded-full bg-blue-500 flex items-center align-middle justify-center'><span className=' text-white text-sm font-medium text-center'>{AnswerNumber}. </span></div>
				<div className=' text-2xl float-right capitalize text-left ml-8'><p className=' text-black font-semibold'>{Answer}</p></div>
			</div>
				{/* <strong >
					
				</strong> */}
			</Button>
			</Box>
		</Grid>
	)
}

export default AnswerButton
