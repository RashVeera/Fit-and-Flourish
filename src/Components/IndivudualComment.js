import React, { useState } from 'react'
import moment from 'moment'
import userIcon from "../assets/userIcon.png"
import "../Styles/Comments.css"


const IndivudualComment = ({item}) => {
    const [expanded,setExpanded]=useState(false)
    console.log(item)

  return item?(
    <div className='commentsContainer'>
                  <img className='authorImage' src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl|| item?.snippet?.authorProfileImageUrl|| userIcon} 
                  alt='authorProfile'
                  onError={(e)=>e.target.src=userIcon}/>
                  <div className='commentDetails'>
                  <div className='commentMeta'>
                  <p>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName || item?.snippet?.authorDisplayName}</p>
                  <p>{moment(item?.snippet?.topLevelComment?.snippet?.publishedAt || item?.snippet?.publishedAt).fromNow()}</p>
                  </div>
                  <p className='reply'>{item?.snippet?.topLevelComment?.snippet?.textOriginal || item?.snippet?.textOriginal}</p>
                  <div className='replyLikeContainer'>
                  <i  class="fa fa-thumbs-up"> {item?.snippet?.topLevelComment?.snippet?.likeCount|| item?.snippet?.likeCount || ''}</i>
                  <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                  </div>
                  {item?.replies && 
                  <div className='replyContainer' onClick={()=>{setExpanded(!expanded)}}>
                  {!expanded? `🔻${item?.replies?.comments?.length} replies`:`🔺 ${item?.replies?.comments?.length} replies` }
                  {console.log(item?.replies?.comments,item,item?.replies)}
                  {
                    expanded && item?.replies?.comments?.length &&
                    <>
                    {
                        item?.replies?.comments?.map((indItem)=>(
                            <IndivudualComment item={indItem}/>
                        ))
                    }
                    </>
                   
                  }
                  </div>}
                  </div>
  
                  </div>
  ):<></>
}

export default IndivudualComment