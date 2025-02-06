import React from 'react'
import './Founder.css'
import mom from "../src/assets/Mom.jpg"

const Founder = () => {
  return (
    <div className='main-content'>
        <div className='founderLeft'>
            <p>Nice to meet you! </p>
            <p>I'm <span className='highlightFounder'>Ajitha.</span></p>

            <p>I help you achieve your fitness goals with my 30-day weight loss challenge while promoting sustainable living through seed banking and terrace farming.</p>
            <p ><span className='highlight'>CONTACT ME</span></p>
        </div>
        <div className='founderRight'>
            <img className='founderPic' src={mom} alt={`Founder`}/>
        </div>
    </div>
  )
}

export default Founder