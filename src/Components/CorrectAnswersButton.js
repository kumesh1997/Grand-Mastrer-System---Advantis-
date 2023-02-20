import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const CorrectAnswersButton = ({OnClickHandler}) => {
  return (
    <div className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4' onClick={() => OnClickHandler()}><VisibilityIcon sx={{ fontSize: 45, color: '#b4cde0' }} /></div>
  )
}

export default CorrectAnswersButton