//1. memo() => higher order component (HOC)
// giup ghi nho lai 1 props cua component
// nhan component, check kiem tra co prop nao thay doi ko, neu ko co thi khong chay lai component
// ung dung:
//Hooks
//HOC
//Renderprops

//2. memo() = >useCallback()

// import React from "react"

// function App(){
//     console.log("xxxx")
//     return(
//         <div style={{padding: "10px 32px"}}>
//            <h1> Heloo ae</h1>
//         </div>
//     )
// }
// export default React.memo(App)


//useMemo
//dung de tranh thuc hien lai 1 logic ko can thiet
//ex
import {useMemo, useRef, useState} from "react"
function App(){
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProduct] = useState([])
    const [SumPrice, setPriceSum] = useState(0)
    const nameRef = useRef()
    
    const handleSubmid = () =>{
        setProduct([...products, {
            name,
            price: parseFloat(price)// + price
        }])
        console.log(price)
        setPriceSum(prev=>(+( (0 || +prev) + +price)).toString())
        setName('');
        setPrice('');
        nameRef.current.focus()
    }
    const handleClearAll = () =>{
        setProduct([]);
        setPriceSum(0)
    }
    //cah 2 tinh tong
    // const total = products.reduce((result, prod)=>
    //     result + prod.price,0
    // )
    return(
        <div style={{padding: "10px 32px"}}>
           <input 
                ref = {nameRef}
               value = {name}
               placeholder= "Enter name..."
               onChange={e => setName(e.target.value)}
           />
           <br/>
           <input 
               value = {price}
               placeholder= "Enter price..."
               onChange={e => setPrice(e.target.value)}
           />
           <br/>
           <button onClick={handleSubmid}>Add</button>
           <br/>
           <button onClick={handleClearAll}>Clear</button>
           <br/>
           Total:{SumPrice}
           <br/>
           <ul>
                {products.map((product, index)=>(
                    <li
                        key = {index}
                    >   
                        {product.name} - {product.price}
                    </li>
                ))}
           </ul>
        </div>
    )
}
export default App

//map =>()
//function =>{}