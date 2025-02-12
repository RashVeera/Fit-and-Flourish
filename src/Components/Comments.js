import React, { useCallback, useEffect, useState } from 'react'
import "../Styles/Comments.css"
import Comment from './Comment'


const Comments = ({videoId}) => {
    const [comments,setcomments]=useState("")
    const fetchCommentsAPI=useCallback(async()=>{
        const response=await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const data =await response.json()
        setcomments(data)
        console.log('comments',data)

    },[videoId])


    useEffect(()=>{
        fetchCommentsAPI()
    },[])
  return comments? (
   <Comment comments={comments}/>
  ):<></>
}

export default Comments