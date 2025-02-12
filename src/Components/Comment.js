import React from 'react'
import "../Styles/Comments.css"
import IndivudualComment from './IndivudualComment'


const Comment = ({comments}) => {
    return comments? (
      <div className='wholeCommentsContainer'>
          {
              comments.items.map((item)=>
                  <IndivudualComment item={item}/>
              )
          }
      </div>
    ):<></>
}

export default Comment