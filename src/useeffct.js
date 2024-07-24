import { useEffect,useState } from "react"



function UseEffectExample(){


    const[count,setCount]=useState(0)


    useEffect(()=>{
        document.write = `You clicked ${count} times`;
        // <h1>{count}</h1>
    },[count])



    return(
        <>
        <button onClick={()=>setCount((prevCount)=>prevCount+1)}>click me{count} of times {""}</button>

        </>
    )
}
export default  UseEffectExample