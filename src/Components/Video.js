import React, { useCallback, useEffect,useState } from 'react'
import "../Styles/Video.css"
import { useSearchParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import "../Styles/Video.css"
import { addvideoDetails } from '../utils/VideoSlice'
import moment from "moment"

const Video = () => {
    const [searchParams, setSearchParams]=useSearchParams()
    const video=searchParams.get('videoID')
    const playListDetails=useSelector(store=>store.playListItem?.playListItemDetails)
    const [toggle,setToggle]=useState(true)
    const dispatch=useDispatch()
    const videoDetails=useSelector(store=>store.videoItem.videoDetails)
    console.log(videoDetails)
    const fetchAPI= useCallback( async()=>{
      const response=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      const data=await response.json()
      dispatch(addvideoDetails(data))

    },[dispatch,video])
    
    useEffect(()=>{
      fetchAPI()
    },[])

    console.log(toggle)
    if(playListDetails.length===0){
      return
    }
  return videoDetails ?(
    <div className='videoDetails'>
        <iframe width='1000' height='500' className='videoContainer'  src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`} title="YouTube video player"  allowFullScreen></iframe>
        <p className='videoTitle'>{videoDetails.items[0].snippet.title}</p>
        <div className='cVDetail'>
          <p>{videoDetails.items[0].snippet.channelTitle}</p>
          <p className='likeCount'><i class="fa fa-thumbs-up" aria-hidden="true"></i>
          {videoDetails.items[0].statistics.likeCount}</p>
          
        </div>
        <div className={`videoDescription ${toggle?'smallh':'normalh'}`} onClick={()=>{setToggle(!toggle)}}>
        <div className='videoStats'>
        <p>{videoDetails.items[0].statistics.viewCount} views</p>
        <p>{moment(videoDetails.items[0].snippet.publishedAt).fromNow()}</p>
        </div> 
        <p className={`videoDesc ${toggle?'smallw':'normalw'}`}>{videoDetails.items[0].snippet.description}</p>
        </div>
    </div>
  ):<></>
}

export default Video