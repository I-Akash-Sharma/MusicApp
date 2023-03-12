import React from 'react'
import playerContext from '../../context/playerContext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// // Hooks
const fav = () => {
  console.log('I like this one')
}

// Component
function Actions() {
  return (
    <div className="actions">
      <img className="image" src="https://freemusicarchive.org/image?file=images%2Falbums%2FSkidmore_College_Orchestra_-_Mussorgskys_Pictures_at_an_Exhibition_-_2009113013701972.jpg&width=290&height=290&type=image" />
      <div className="album_meta">
        <span className="alb_label">ALBUM</span>
        <h1>Welcome to Akash Sharma's Playlist</h1>
      </div>

    </div>
  )
}

export default Actions
