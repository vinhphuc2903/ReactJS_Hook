/*
    usecallback
    - Reference types
    - React memo()
*/

import React from "react"

function App({onIncrease}){
    console.log("xxxx")
    return(
        <div style={{padding: "10px 32px"}}>
           <h1> Hello ae</h1>
           <button onClick = {onIncrease}>Click me</button>
        </div>
    )
}
export default React.memo(App)
