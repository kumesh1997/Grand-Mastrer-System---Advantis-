import React from 'react'
import MoveDownRoundedIcon from '@mui/icons-material/MoveDownRounded';

const SwitchButton = ({OnClickHandler}) => {
  return (
    <div className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4 cursor-pointer' onClick={() => OnClickHandler()}>
        <MoveDownRoundedIcon sx={{ fontSize: 50, color: '#60ccd6' }}  />
    </div>
  )
}

export default SwitchButton