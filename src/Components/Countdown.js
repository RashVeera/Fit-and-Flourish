import React,{useState} from 'react'
import "../Styles/Countdown.css"

// Input box , remaining time is , start button 
const Countdown = () => {
    const [timeLeft,settimeLeft]=useState(0)
    const [inputTime,setinputTime]=useState("")
    const handleClick =()=>{
        
        settimeLeft(parseInt(inputTime))
        let timer=setInterval(()=>{
            console.log(timeLeft)
            settimeLeft((prev)=>{
                if(prev<=0){
                    return clearInterval(timer)
                }
                else{
                    return parseInt(prev)-1;
                }
                })
        },1000)

    }
  return (
    <div className='countdownContainer'>
        <input type='number' name='timer' onChange={(e)=>{setinputTime(e.target.value)}} />
        <span>Remaining Time is  {timeLeft}</span>
        <button onClick={handleClick} disabled={timeLeft>0?true:false}>START</button>
    </div>
  )
}

export default Countdown