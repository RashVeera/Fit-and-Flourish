import React, { useCallback, useEffect, useState } from 'react'
import { playListID } from '../utils/constants'
import PlayListHeader from './PlayListHeader'
import PlayListItems from './PlayListItems'
import { useDispatch, useSelector } from "react-redux";
import { addplayListItem } from '../utils/PlayListItemSlice';


const PlayList = () => {
  const dispatch=useDispatch()
  const selectMovies=useSelector(store=>store.playListItem?.playListItemDetails)

  const fetchAPI=useCallback(
    async ()=>{
    const response=await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=${playListID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    const data =await response.json()
    dispatch(addplayListItem(data))
},[dispatch]) 


  useEffect(()=>{
    !selectMovies && fetchAPI()
  },[selectMovies,fetchAPI])
  console.log(selectMovies)
  return selectMovies!==null? (
    <div>
        
        <PlayListHeader data={selectMovies}/>
        {  
          selectMovies?.items.map((item)=>{
         return( (Object.keys(item?.snippet?.thumbnails).length!==0) &&
            <PlayListItems key={item.id} videoDetails={item}/>
          
        )}
          )
        }
    </div>
  ):<></>
}

export default PlayList