import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { VisibilityOff } from '@mui/icons-material'

const CorrectAnswersButton = ({ OnClickHandler, showCorrect = false }) => {
	return (
		<span
			className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4 cursor-pointer'
			onClick={() => OnClickHandler()}
		>
			{showCorrect ? (
				<VisibilityOff sx={{ fontSize: 45, color: '#b4cde0' }} />
			) : (
				<VisibilityIcon sx={{ fontSize: 45, color: '#b4cde0' }} />
			)}
		</span>
	)
}

export default CorrectAnswersButton
