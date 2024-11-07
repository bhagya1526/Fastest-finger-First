import {forwardRef, useImperativeHandle, useRef} from 'react'
import{createPortal} from 'react-dom';
const ResultModal = forwardRef(function ResultModal({targetTime,remainTime, onReset},ref){
    const openDialog=useRef();
    const userLost = remainTime <= 0;
    const formattedTime = (remainTime/1000).toFixed(2);
    const score = Math.round((1-remainTime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return{
            open(){
                openDialog.current.showModal();
            }
        }
    })
    return createPortal(<dialog ref={openDialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2> Your score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedTime}</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>close</button>
            </form>
    </dialog>,
    document.getElementById('modal')
    )
}
)
export default ResultModal;