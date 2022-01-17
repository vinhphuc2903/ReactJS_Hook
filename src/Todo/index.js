//useReduce
//reduce E= redux
// cung cap them 1 lua chon de su dung state 
// usereduce giai quyet van de nhu usestate phuc tap
// Dung trong truong hop local state cua component co nhieu action lam thya doi state do
/*
    reducer don gian la gi:
    - la 1 ham co 2 tham so: state + action
        + action tra ve new state 
        + nhan input => thuc hien action tac dong den input => tao output
    
*/ 
import {useReducer, useState, useRef} from 'react'
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './action'
import logger from './logger';
// function App() {
//     const [count, setCount] = useState(0)
//     const handleDown = () =>{
//         setCount(prev => prev - 1)
//     }
//     const handleUp = () =>{
//         setCount(prev => prev + 1)
//     }

//     //useReducer
//     //1. Init state: 0
//     //2. Actions: Up(state+1) / down(state -1)
//     //3. Reducer
//     //4. Dispatch

//     //Init state
//     const initState = 0

//     // Actions
//     const UP_ACTION = 'up'
//     const DOWN_ACTION = 'down'

//     // Reducer
//     const reducer = (state, action) =>{
//         console.log("run reducer")
//         switch(action)
//         {
//             case UP_ACTION:
//                 return state +1 
//             case DOWN_ACTION:
//                 return state -1 
//             default:
//                 throw new Error('Invalid action')
//         }
//     }

//     // Dispatch
//     const [re_count, dispatch] = useReducer(reducer, initState)
//     return(
//         <div>
//             <h2>{re_count}</h2>
//             <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//             <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//         </div>
//     )
// }

function App(){
    // Dispatch
    const inputRef = useRef();
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const {job, jobs} = state
    //add job
    const handleSubmid = () =>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return(
        <div style={{padding: '0 20px'}}>
            <h3> Todo</h3>
            <input
                ref = {inputRef}
                value = {job}
                placeholder='Enter todo...'
                onChange={e => {
                    //setJob(e.target.value)
                    dispatch(setJob(e.target.value))
                }}
            >
            </input>
            <button onClick={handleSubmid}>
                Add
            </button>
            <ul>
                {jobs.map((job,index)=>
                (
                    <li key={index}>
                    {job} 
                    <span onClick={() =>dispatch(deleteJob(index))}>
                        &times;
                    </span>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}
export default App