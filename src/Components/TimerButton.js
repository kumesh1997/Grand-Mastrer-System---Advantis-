import React, { useState } from 'react'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const TimerButton = ({
    OnClickHandler
}) => {
  const [ clicked, setClicked ] = useState(false);
  const ClickHandle = () => {
    OnClickHandler()
    setClicked(!clicked);
  }
  return (
    <div className=' text-center w-auto duration-75 hover:-translate-y-2 mr-4 cursor-pointer' onClick={ClickHandle} ><AccessAlarmsIcon  sx={{ fontSize: 45, color: '#228f5a' }} /></div>
  )
}

export default TimerButton