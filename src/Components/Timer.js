import React, { useEffect, useState } from 'react'
import { useRef, forwardRef, useImperativeHandle } from 'react';

const Timer = forwardRef(({}, ref) => {
    useImperativeHandle(ref, () => {
        return {
            StopTheWatch: Stop,
        }
    })
    const [ seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ clicked, setClicked ] = useState(0);
    const myRef = useRef(null);

    

    
    var timer;
    const Stop = async () => {
        // clearInterval(timer);
        setSeconds(0);
        // await clearInterval(timer);

    }

    const start = () => {
        alert('Started')
    }
    useEffect(() => {
        // if(stopCountdown !== 0){
        //     Stop();
        // }
        timer = setInterval(() => {
            setSeconds(seconds-1);
            if(seconds === 1){
                clearInterval(timer);
                setClicked(0);
                // setMinutes(0);
                // setSeconds(30);
            }else if(seconds <= 0 ){
                setMinutes(0);
                setSeconds(0);
                setClicked(0);
            }
        }, 1000)
        return () => clearInterval(timer);
    });

    // useEffect(() => {
    //     props.onRef(myRef);
    //     return () => props.onRef(null);
    // },[]);

    const reStart = () => {
        // setSeconds(0);
        // setMinutes(0);
        setSeconds(30);
        setMinutes(0);
    }

    const ClickHandle = () => {
        if(clicked === 1){
            setClicked(0);
        }else{
            reStart();
            setClicked(1);
        }
    }

   
  return (
    <div className=' absolute top-1 right-1'>
        <div 
            className=' text-center w-32 bg-black border-white border-2
                        text-white p-2 font-bold text-3xl rounded-lg cursor-pointer bg-opacity-60 duration-100 active:border-black'
            >
                <h2 
                    className={ seconds<10? 'text-red-600' 
                    : 'text-white'}>{minutes<10? "0"+ minutes : minutes} : {seconds<10? "0"+seconds : seconds}
                </h2>
                <button className=' bg-green-600 p-2 rounded-md mt-1 w-full text-lg' onClick={ClickHandle}>{clicked === 0 ? 'Start' : 'Pause' }</button>
                {/* <button onClick={Stop}>Stop</button> */}
        </div>
    </div>
  )
})

export default Timer