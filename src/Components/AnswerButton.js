import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

const AnswerButton = ({
	Answer = 'Answer',
	AnswerNumber = 0,
	CorrectAnswer = 1,
	SelectedAnswerNumber,
	showCorrect = false,
	onClick,
}) => {
	const [buttonClicked, setButtonClicked] = useState(false)
	const inSideClickHandle = () => {
		setButtonClicked(!buttonClicked)
		onClick()
	}

	const buttonCommonCss = {
		width: '400px',
		height: '100px',
		opacity: '0.9',
		borderRadius: 50,
		color: 'black',
		fontWeight: 400,
	}
	return (
		<Grid item sm={6} onClick={inSideClickHandle}>
			<Button
				variant='contained'
				sx={{
					...buttonCommonCss,
					backgroundColor:
						showCorrect &&
						SelectedAnswerNumber === AnswerNumber &&
						SelectedAnswerNumber === CorrectAnswer
							? '#075716' //green color
							: showCorrect &&
							  SelectedAnswerNumber === AnswerNumber &&
							  AnswerNumber !== CorrectAnswer
							? 'red'
							: !showCorrect && SelectedAnswerNumber === AnswerNumber
							? '#E4A11B' //brown color
							: 'white',
				}}
			>
				<strong>
					[ {AnswerNumber} ] {Answer}
				</strong>
			</Button>
		</Grid>
	)
}

export default AnswerButton
