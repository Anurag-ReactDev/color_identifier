import { useState } from "react"

const Color = ()=>{
    const [backgroundColor,setbackgroundColor] = useState('#F54927')
    return(
        <>
            <div>
                <input type="text" placeholder="hex_code" onChange={(e)=>{setbackgroundColor('#'+e.target.value)}}></input>
            </div>
            <p>Current Color code: {backgroundColor}</p>

            <div style={{height:'5rem',width:'100%',border:'2px solid black',backgroundColor:backgroundColor}}>
                
            </div>
        </>
    )
}

export default Color