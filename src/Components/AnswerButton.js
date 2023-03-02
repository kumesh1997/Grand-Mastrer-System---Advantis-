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
		display: 'flex',
		// color: 'black',
		fontWeight: 400,
		fontSize: '1.2em',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: 'black',
		},
	}
	const conditionalCss =
		parseInt(triesAvailable) < 1 && AnswerNumber === CorrectAnswer
			? { backgroundColor: '#075716', color: 'white' } //green color
			: showCorrect &&
			  SelectedAnswerNumber === AnswerNumber &&
			  AnswerNumber === CorrectAnswer
			? { backgroundColor: '#075716', color: 'white' } //green color
			: showCorrect &&
			  SelectedAnswerNumber === AnswerNumber &&
			  AnswerNumber !== CorrectAnswer
			? { backgroundColor: 'red', color: 'white' }
			: !showCorrect && SelectedAnswerNumber === AnswerNumber
			? { color: '#ffffff ', backgroundColor: '#E4A11B' } //brown color
			: lockedAnswers.find((value) => value === AnswerNumber)
			? { backgroundColor: 'grey', color: 'white' }
			: { backgroundColor: 'white', color: 'black' }
	return (
		<Grid item sm={6} onClick={inSideClickHandle}>
			<Box boxShadow={2}>
				<Button
					variant='contained'
					sx={{
						...conditionalCss,
						...buttonCommonCss,
					}}
				>
					<p style={{ width: 20 }} className=' text-black  font-medium  '>
						{AnswerNumber}.{' '}
					</p>
					<p className=' font-semibold text-start'>{Answer}</p>

					{/* <strong >
					
				</strong> */}
				</Button>
			</Box>
		</Grid>
	)
}

export default AnswerButton
