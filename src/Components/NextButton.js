import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext'

const NextButton = ({ OnClickHandler }) => {
	return (
		<span
			className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4 cursor-pointer'
			onClick={() => OnClickHandler()}
		>
			<SkipNextIcon sx={{ fontSize: 50, color: '#d0d1a3' }} />
		</span>
	)
}

export default NextButton
