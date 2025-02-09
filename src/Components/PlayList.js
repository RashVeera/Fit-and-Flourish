import React, { useEffect, useState } from 'react'
import { playListID } from '../utils/constants'
import PlayListHeader from './PlayListHeader'
import PlayListItems from './PlayListItems'

const PlayList = () => {
  const [playListItems,setplayListItems]=useState("")

  useEffect(()=>{
    const fetchAPI=async ()=>{
        const response=await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playListID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const data =await response.json()
        setplayListItems(data)
    } 
    fetchAPI()
  },[])
  return playListItems!==undefined? (
    <div>
        
        <PlayListHeader data={playListItems}/>
        {  
          playListItems?.items.map((item)=>{
         return( (Object.keys(item?.snippet?.thumbnails).length!==0) &&
            <PlayListItems videoDetails={item}/>
          
        )}
          )
        }
    </div>
  ):<></>
}

export default PlayList