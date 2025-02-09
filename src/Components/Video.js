import React from 'react'
import "../Styles/Video.css"
import { useSearchParams } from 'react-router'

const Video = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const video=searchParams.get('videoID')
    console.log(video)
  return (
    <div>
        <iframe width='1000' height='500' className='videoContainer'  src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`} title="YouTube video player"  allowFullScreen></iframe>
    </div>
  )
}

export default Video