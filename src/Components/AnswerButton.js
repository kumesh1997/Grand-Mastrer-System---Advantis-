import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

const AnswerButton = ({
	Answer = 'Answer',
	AnswerNumber = 0,
	CorrectAnswer = 1,
	Selected,
	onClick,
	reviewAnswer
}) => {
	const [buttonClicked, setButtonClicked] = useState(false)
	const inSideClickHandle = () => {
		setButtonClicked(!buttonClicked)
		onClick()
	}

	const buttonCommonCss = {
		width: '400px',
		height: '100px',
		opacity: '0.8',
		borderRadius: 50,
		color: 'black',
	}
	return (
		<Grid item sm={6} onClick={inSideClickHandle}>
			<Button
				variant='contained'
				sx={{
					...buttonCommonCss,
					backgroundColor:
						Selected === AnswerNumber && Selected === CorrectAnswer
							? '#075716'
							: Selected === AnswerNumber
							? '#E4A11B'
							: 'white',
				}}
			>
				[ {AnswerNumber} ] {Answer}
			</Button>
		</Grid>
	)
}

export default AnswerButton
