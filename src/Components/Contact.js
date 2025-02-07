import React, { useState } from 'react'
import '../Styles/Contact.css'
import youtube from '../assets/youtubeicon.png'
import instagram from "../assets/instagramicon.jpg"
import gmail from "../assets/gmailIcon.jpg"
import emailjs from 'emailjs-com';
import {youtube_URL} from "../utils/constants.js"
import {GmailId} from "../utils/constants.js"

const Contact = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [modal,setModal]=useState("")
    const [formError,setformError]=useState("")
    console.log(formError)
    const validate=(name,email,message)=>{
        let namepattern=/([a-zA-Z_\s]+)/g;
        let emailpattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!namepattern.test(name)){
            setformError('Enter a valid Name')
            return false
        }

        if(!emailpattern.test(email)){
            setformError('Enter a valid Email')
            return false
        }
        
        if(!message){
            setformError('Enter a non-empty message')
            return false
        }
        setformError("")
        return true

    }
    const handleSubmit=(e)=>{
        e.preventDefault();  
        if(validate(name,email,message)){
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,{name:name,email:email,message:message},process.env.REACT_APP_USER_ID)
            .then((result) => {
                  setEmail("")
                  setMessage("")
                  setName("")
                
            }, (error) => {
                console.log(error.text);
            });
        }
     

    }
  return (
    <div id='contact' className='contactContainer'>
        <div className='contactForm'>
            <div className='contactMe'>
                <h1>Contact</h1>
                <p>
                Have questions or ready to start your wellness journey?
                 Let's connect! Reach out to me for personalized coaching, weight loss guidance,
                  or sustainable living tips.
                </p>
            </div>
                <form className='formFields' onSubmit={handleSubmit}>
                <input  type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='NAME'/>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='EMAIL'/>
                <textarea cols="30" value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="10" placeholder='MESSAGE'></textarea> 
                
                <button type='submit'>SEND MESSAGE</button>
                {formError && <p className='error'>{formError}</p>}

                </form>
        </div>
        <div className='socialLinks'>
            <p>Ajitha</p>
            <div className='links'>
                <a href={youtube_URL}>
                <img src={youtube} alt='youtube'/>
                </a>
                <a href={youtube_URL}>
                <img src={instagram} alt='instagram'/>
                </a>
                <a href={`mailto:${GmailId}`}>
                <img src={gmail} alt='gmail'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact