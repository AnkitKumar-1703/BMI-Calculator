import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './components/Heading'
import { Input } from './components/Inupt'
import { Button1, Button2 } from './components/Button'
import { Bottomheading } from './components/Bottomheading'
// import { calculate } from './components/function'
import axios from "axios"
import { Verdict } from './components/Verdict'

function App() {
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [value,setValue]=useState("");
  const [text,setText]=useState("");

  return (
    <>
    <div className='bg-blue-400 h-screen flex justify-center items-center'> 
      <div className='bg-white p-10 flex flex-col gap-2 rounded-md w-96'>
        <Heading/>
        <Input id="weight" onchange={(e)=>{setWeight(e.target.value)}} label='Weight (kg)' placeholder='Enter weight value'/>
        <Input id="height" onchange={(e)=>{setHeight(e.target.value)}} label='Height (cm)' placeholder='Enter height value'/>
        <Button1 onclick={async()=>{
          // setValue(calculate(weight,height))
          console.log((weight));
          const response = await axios.get("http://localhost:3000/calculate", {
              params: {
                weight,
                height
              }
            });
          setValue(response.data.bmi);
          setText(response.data.text);
          
        }}/>
        <Button2 onclick={()=>{
          document.getElementById("weight").value="";
          document.getElementById("height").value="";
          setWeight("");
          setHeight("");
          setValue("");
          setText("");
        
          console.log(value);
        }}/>
        <Bottomheading label={value}/>
        <Verdict text={text}/>
      </div>
    </div>
      
    </>
  )
}

export default App
