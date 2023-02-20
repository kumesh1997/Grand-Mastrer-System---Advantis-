import React, { useState } from 'react'
import AnswerButton from '../Components/AnswerButton'
import BottomControlBar from './BottomControlBar';
import QuestionView from './QuestionView';
import LinearProgressWithLabel from './LinearWithValueLabel';
import data from '../data.json';
// import image from '/img/image.jpg';
import Image from '../images/Hogwarts.jpg';

const QuestionPage = () => {

    const [ DummyState, setDummyState ] = useState();
    let isCorrect = false;
    const QId = 1;
    const [ QuestionData , setQuestionData ] = useState(null);
    const [ selectedAnswerNumber, setSelectedAnswerNumber ] = useState(2);
    const [ openTimer, setOpenTimer ] = useState(false);
    const [ correct, setCorrect ] = useState(false);


    const [progress, setProgress] = React.useState(0);

    const getData = () => {
        setQuestionData(data[QId-1]);
    }

    React.useEffect(() => {
        getData();
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
      }, 100);

      return () => {
        clearInterval(timer);
      };
      
    }, []);

    const HandleAnswerButtonClick = () => {
        // alert(selectedAnswerNumber)
        console.log("Selected -> ", selectedAnswerNumber, "Answer ->",QuestionData.answer)
        if(selectedAnswerNumber === QuestionData.answer){
            // setCorrect(true);
            isCorrect = true;
            console.log('Your Answer is True')
        }else{
            // setCorrect(false);
            isCorrect = false;
            console.log('Your Answer is False')
        }
        setDummyState(Math.random());
        console.log(isCorrect)
    }

    const HandleTimerButtonClick = () => {
        setOpenTimer(!openTimer);
    }

    const HandleNextButtonClick = () => {

    }

  return (
    <div className=" text-center fixed min-h-full min-w-full bg-cover bg-opacity-40" style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: false,
    }}  >
            <div className=' p-2'  >
                 {/* { openTimer? <LinearProgressWithLabel value={progress} /> : null} */}
            </div>
            <div className=' p-4'>
                <QuestionView Question={data[QId-1].question} />
            </div>
            <div className=" grid grid-cols-2 gap-6 p-6">
            {
                data[QId-1].answers.map((item, index) => {
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