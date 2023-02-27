import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'

const CorrectAnswersButton = ({ OnClickHandler }) => {
	return (
		<span
			className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4 cursor-pointer'
			onClick={() => OnClickHandler()}
		>
			<VisibilityIcon sx={{ fontSize: 45, color: '#b4cde0' }} />
		</span>
	)
}

export default CorrectAnswersButton
