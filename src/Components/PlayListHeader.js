import React from 'react'
import "../Styles/PlayListItems.css"

const PlayListHeader = ({data}) => {
  const title=data?.items[0]?.snippet?.videoOwnerChannelTitle
  return (
    <div className='playListHeader'>
      <h1>Ajitha Veerapandian | Self Sustained Living </h1>
      <p>by {title}</p>
    </div>
  )
}

export default PlayListHeader