import { useRef, useState } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({title, targetTime}){
    const timer =useRef();
    const openDialog=useRef();
    const [timeRemaining,setTimeRemaining]=useState(targetTime*1000);
    const timerActive = timeRemaining> 0 && timeRemaining < targetTime*1000;
    if(timeRemaining <=0){
        clearInterval(timer.current);
        openDialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    function handleStart(){
         timer.current =setInterval(()=>{
            setTimeRemaining(prev => prev - 10);
        },10);
    }
    function handleStop(){
        openDialog.current.open();
        clearInterval(timer.current);  
    }
    return(
        <>
        <ResultModal ref={openDialog}  targetTime={targetTime} remainTime={timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerActive ? handleStop : handleStart}>
                   {timerActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerActive ? 'active' : undefined}>
                {timerActive ? "Time is running..." : "Timer inactive" }
            </p>
        </section>
        </>
    )
}