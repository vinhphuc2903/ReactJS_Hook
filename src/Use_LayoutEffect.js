import { useEffect, useLayoutEffect, useState } from "react"

/*
 sự khác nhau cơ bản giữa useEffect và useLayoutEffect
    useEffcet:                               useLayoutEffect
    1- Cập nhật lại state                     1- Cập nhật lại state 
    2- Cập nhật DOM (mutated)                 2- Cập nhật DOM (mutated)
    3- Render lại UI                          4- Render lại UI
    4- Gọi cleanup nếu deps thay đổi          3- Gọi cleanup nếu deps thay đổi (sync)
    5- Gọi useEffecet callback                5- Gọi useLayoutEffect callback (sync)
*/
function Use_LayoutEffect()
{
    const [count, setCount]= useState(0)
    useLayoutEffect(()=>{
        if(count > 3)
            setCount(0)
    },[count])
    const hadleRun = () =>
    {
        // if(count >= 3)
        //     setCount(0)
        // else
            setCount(prev => prev + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button
                onClick={hadleRun}
            >
                Dem
            </button>
        </div>
    )
}
export default Use_LayoutEffect
// useState 
// useEffect
// useLayoutEffect