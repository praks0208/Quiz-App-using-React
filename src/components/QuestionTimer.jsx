import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeOut}){
const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        
        setTimeout(onTimeOut, timeout);
    }, [timeout, onTimeOut]);

    useEffect(() => {
        setInterval(()=>{
            console.log('SETTING INTERVAL');
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} />;
}