import React from 'react'
import SkipNextIcon from '@mui/icons-material/SkipNext';

const NextButton = ({OnClickHandler}) => {
  return (
    <div className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4' onClick={() => OnClickHandler()}><SkipNextIcon sx={{ fontSize: 50, color: '#d0d1a3' }} /></div>
  )
}

export default NextButton