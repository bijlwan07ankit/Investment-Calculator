import React from 'react'
import { useState } from 'react'
function UserInput() {
    const [userInput , setUserInput]=useState({
        initialInvestment :10000 ,
        annualInvestment :1200,
        expectedReturn :6,
        duration:10,
    });

function handleChange(inputIentifier,newValue){
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [inputIentifier] : newValue
        };
    });
}

  return (
   <>
   <section id="user-input">
  <div className="input-group">
<p>
    <lebel>Initial Investment</lebel>
    <input  type="number" required onChange={()=>handleChange()} />
</p>
<p>
    <lebel>Annual Investment</lebel>
    <input  type="number" required />
</p>

<p>
    <lebel>Expected return</lebel>
    <input   type="number" required/>
</p>
<p>
    <lebel>Duration </lebel>
    <input   type="number" required/>
</p>
  </div>
   </section>
   </>
  )
}

export default UserInput