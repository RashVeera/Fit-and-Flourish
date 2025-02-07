import React from 'react'
import purpose from "../assets/purpose.jpg"
import "../Styles/purpose.css"


const Purpose = () => {
  return (
    <div className='purposeContainer'>
        <div className='purposeLeft'>
            <img className='purposeImage' src={purpose} alt='purposeImage'/>
            <div className='purposeDescription'>
                <p className='purposeDesc1'>Want to lose weight and grow healthy?</p>
                    <p className='purposeDesc2'>
                    Ready to transform your health and embrace sustainable living? Join me on a journey of weight loss, wellness, and homegrown nutrition!
                    </p>
            </div>
        </div>
        <div className='purposeRight'>
            <h2>New</h2>
            <div className='classes'>
                <span> Sustainable Weight Loss Made Simple </span>
                <p>Can you transform your body in just 30 days? My proven challenge helps you achieve lasting results with a balanced and holistic approach</p>
                <hr/>
                <span> Grow Your Own Health</span>
                <p>Want to eat fresh, organic food right from your home? Terrace farming makes it easy to cultivate nutrition while embracing sustainability.</p>
                <hr/>
                <span> Seeds: Tiny Powerhouses for the Future </span>
                <p>Why is seed banking essential for food security? Preserving seeds today ensures a healthier and more sustainable tomorrow</p>
            </div>
        </div>
    </div>
  )
}

export default Purpose