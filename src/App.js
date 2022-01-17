import logo from './logo.svg';

//hook UseState
// import {useState} from 'react'

// const order = [100, 200, 300]
// function App() {
//   const total = order.reduce((total, cur) => total + cur)
//   const [counter, setCounter] = useState(total);
//   const handleIncrease = () =>{
//     setCounter(preState => preState + 2)
//   }

//   //
//   const [info, setInfo] = useState({
//     name: 'Nguyen Van A',
//     age: 18,
//     address: 'Ha Noi, VN'
//   })
//   //
//   const handleUpdate = () =>{
//     setInfo({
//       ...info,
//       bio: 'Yeu mau hong'
//     })
//   }
//   return (
//     <div className="App" style={{pading: 20}}>
//       {/*<h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       */}
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );

//EX hook UseState
// import {useState} from 'react'

// const order = [100, 200, 300]
// function App() {
//   const gifts= [
//     'CPU i9',
//     'RAM 32GB RGB',
//     'RGB Keyboard',
//   ]
//   const [counter, setCounter] = useState('Chua co phan thuong');
//   const handleIncrease = () =>{
//     setCounter(gifts[Math.floor(Math.random()*gifts.length)])
//   }

//   return (
//     <div className="App" style={{padding: 20}}>
//       {/*<h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       */}
//       <h1>{counter || 'Chua co phan thuong'}</h1>
//       <button onClick={handleIncrease}>Lay thuong</button>
//     </div>
//   );
// }

//two-way binding
// import {useState} from 'react'

// function App() {
//   const [name, setName] = useState('')
//   const [email,setEmail] = useState('')
//   const handleSubmid =() =>{
//     console.log(
//       name,
//       email
//     )
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//         <input
//           onChange={e =>setName(e.target.value)} 
//           value = {name}
//         />
//         <input
//           onChange={e =>setEmail(e.target.value)} 
//           value = {email}
//         />
//         <button onClick={handleSubmid}>Change</button>
//     </div>
//   );
//}

//Response from API: radio box
// import {useState} from 'react'

// function App() {
//   const courses =[
    
//     {
//       id: 1,
//       name: 'HTML, CSS'
//     },
//     {
//       id: 2,
//       name: 'JavaScript'
//     },
//     {
//       id: 3,
//       name: 'ReactJS'
//     }
//   ]
//   const [checked, setChecked] = useState()
//   const handleSubmit = () =>{

//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//         {courses.map(course =>(
//           <div key ={course.id}>
//             <input type='radio' 
//               onChange={() => setChecked(course.id)}
//               checked={checked === course.id}
//             />
//               {course.name}
//           </div>
//         ))}
//         <button>Change</button>
//     </div>
//   );
// }

//checkbox: check or uncheck
// import {useState} from 'react'
// const courses =[
    
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JavaScript'
//   }, 
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]
// function App() {
//   const [checked, setChecked] = useState([])
//   const ids = []
//   const handleCheck = (id) =>{
//     setChecked(prev => 
//       {
//         const isChecked = checked.includes(id)
//         if (isChecked)
//         {
//           return checked.filter(item => item !== id)
//         }
//         else
//         {
//           return [...prev, id]
//         }
//       })
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//         {courses.map(course =>(
//           <div key ={course.id}>
//             <input 
//               type='checkbox' 
//               checked={checked.includes(course.id)}
//               onChange={() => handleCheck(course.id)}
//             />
//               {course.name}
//           </div>
//         ))}
//         <button>Change</button>
//     </div>
//   );
// }

//add selection
// import {useState} from 'react'
// function App() {
//   //get data local storage
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//   const [listcvs, setChecked] = useState(() =>{
//     return JSON.parse(localStorage.getItem('jobs')) || []
//   })
//   const [cv1, setCv] = useState('')
//   const handleCheckCV = () =>{
//     setChecked(prev =>{
//       const newJobs = [...prev, cv1]
//       //save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs
//     })
//     setCv('');
//   }
//   const handleClearCV = () => {
//     setChecked([]);
//     setCv('');
//     localStorage.removeItem ('jobs')
//   }
//   return (
//     <div className="App" style={{padding: 20}}>
//         <input
//           id = 'inputxx'
//           value = {cv1}
//           onChange={e=>setCv(e.target.value)}
//         />
//         <button onClick={handleCheckCV}>Add</button>
//         <button onClick={handleClearCV}>Clear</button>
//         <ul>
//           {listcvs.map((cv,index) =>(
//             <li key={index}>{cv}</li>  
//           ))}
//         </ul>
//     </div>
//   );
// }

//mounted / unmounted: gan vao, go ra

import {useCallback, useState} from 'react'
import Test from './Use_Effect.js'
import UseLayoutEffect from './Use_LayoutEffect.js'
import Use_ref from './Use_ref.js'
import Memmo from './Memo_react.js'
import Use_Callback from './Use_Callback.js';
import Use_Reduce from './Use_Reduce.js'
import TodoApp from './Todo'
// function App(){
//   const [count, setCount] = useState(0)
//   const handleIncrease = useCallback(() =>{
//       setCount(pre_count => pre_count + 1)
//   },[])
//   return(
//       <div style={{padding: "10px 32px"}}>
//           <Use_Callback onIncrease={handleIncrease}/>
//           <h1>{count}</h1>
         
//       </div>
//   )
// }
function App()
{
  return(
    <div id="txtxs">
      <TodoApp/>
    </div>
  )
}
export default App
//useEffect() with fake ChatApp
/*Used:
1. Update Dom
2. Call API
3. Listen DOM events
4. Clearnup

*/
