
import { useEffect, useState, useRef } from "react"

/*
    Dung de luu cac gia tri qua mot tham chieu ben ngoai
    Function component
*/
//let timerID  //=> tranh viec nay
//
function App(){
    let ref = useRef()
    const preCount = useRef()
    const [count, setCount] = useState(60)  
    const h1Ref = useRef() 
    useEffect(()=>{
        preCount.current = count
    },[count])
    const handleStart = () =>{
        ref.current = setInterval(()=>{
            setCount(preCount => preCount - 1)
        }, 1000)
    }
    const handleStop = () =>{
        clearInterval(ref.current)
    }
    useEffect(()=>{
        console.log(h1Ref.current.getBoundingClientRect())
    })
    console.log(count, preCount.current)
    return(
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <h1 ref = {h1Ref}>{count}</h1>
        </div>
    )
}
export default App