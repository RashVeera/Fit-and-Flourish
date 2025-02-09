import React from 'react'
import { Link } from 'react-router'
import '../Styles/PlayListItems.css'


const PlayListItems = ({videoDetails}) => {
     const title=videoDetails?.snippet?.title
     const thumbnailInfo=videoDetails?.snippet?.thumbnails?.default?.url
     const videoID=videoDetails?.snippet?.resourceId?.videoId
     const channelTitle=videoDetails?.snippet?.channelTitle

  return (
   
    <div className='playListContainer'>
     <Link className='playList' to={`/video?videoID=${videoID}`}>
        <div>
        <img className='playListItem' src={thumbnailInfo} alt='thumbnail'/>
        </div>
        <div>
        <p className='playListTitle'>{title}</p>
        <p className='channelTitle'>{channelTitle}</p>
        </div>
    </Link>    
    </div>
 
  )
}

export default PlayListItems