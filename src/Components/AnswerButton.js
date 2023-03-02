import { Button, Grid } from '@mui/material'
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
				<strong className=' text-1xl capitalize'>
					[ {AnswerNumber} ] {Answer}
				</strong>
			</Button>
		</Grid>
	)
}

export default AnswerButton
