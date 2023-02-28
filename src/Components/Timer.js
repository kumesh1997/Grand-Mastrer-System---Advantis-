import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [ seconds, setSeconds ] = useState(30);
    const [ minutes, setMinutes ] = useState(0);
    const [ clicked, setClicked ] = useState(0);

    

    
    var timer;
    const Stop = () => {
        clearInterval(timer);
    }

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds-1);
            if(seconds === 1){
                setMinutes(0);
                setSeconds(30);
                Stop();
            }
        }, 1000)
        return () => clearInterval(timer);
    });

    const reStart = () => {
        setSeconds(0);
        setMinutes(0);
    }

    const ClickHandle = () => {
        if(clicked === 1){
            Stop(); 
        }else{
            
        }
    }

   
  return (
    <div className=' text-center w-32 bg-black border-white border-2 text-white p-2 font-bold text-3xl rounded-lg cursor-pointer duration-100 active:border-black' onClick={ClickHandle}>
        <h2 className={ seconds<10? 'text-red-600' : 'text-white'}>{minutes<10? "0"+ minutes : minutes} : {seconds<10? "0"+seconds : seconds}</h2>
    </div>
  )
}

export default Timer