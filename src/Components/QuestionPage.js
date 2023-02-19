import React, { useState } from 'react'
import AnswerButton from '../Components/AnswerButton'
import BottomControlBar from './BottomControlBar';
import QuestionView from './QuestionView';
import LinearProgressWithLabel from './LinearWithValueLabel';
import data from '../data.json';
// import image from '/img/image.jpg';

const QuestionPage = () => {

    const QId = 1;
    const [ QuestionData , setQuestionData ] = useState(null);
    const [ selectedAnswerNumber, setSelectedAnswerNumber ] = useState(2);
    const [ openTimer, setOpenTimer ] = useState(false);
    const [ correct, setCorrect ] = useState(false);


    const [progress, setProgress] = React.useState(0);

    const getData = () => {
        setQuestionData((data[QId-1]));
    }

    React.useEffect(() => {
        getData();
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
      }, 100);

      return () => {
        clearInterval(timer);
      };
      
    }, [correct]);

    const HandleAnswerButtonClick = () => {
        alert(selectedAnswerNumber)
        console.log(QuestionData.answer)
        if(selectedAnswerNumber === QuestionData.answer){
            setCorrect(true);
        }else{
            setCorrect(false);
        }
    }

    const HandleTimerButtonClick = () => {
        setOpenTimer(!openTimer);
    }

    const HandleNextButtonClick = () => {

    }

  return (
    <div className=" "   >
            <div className=' p-2 mt-4'>
                 {/* { openTimer? <LinearProgressWithLabel value={progress} /> : null} */}
                {/* <img src='' alt='image'  /> */}
            </div>
            <div className=' p-4'>
                <QuestionView />
            </div>
            <div className=" grid grid-cols-2 gap-6 p-6">
            {
                data[QId].answers.map((item, index) => {
                    return <AnswerButton key={index} AnswerNumber={index+1} Answer={item} HandleOnClick={() => setSelectedAnswerNumber(index+1)} />
                })
            }
            </div>
            <div>
                <BottomControlBar AnswerButtonClick={HandleAnswerButtonClick} TimerButtonClick={HandleTimerButtonClick} NextButtonClick={HandleNextButtonClick} />
            </div>
    </div>
  )
}

export default QuestionPage