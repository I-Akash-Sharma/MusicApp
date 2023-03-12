import React, { useContext, useState } from 'react'
import playerContext from '../../context/playerContext'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Playlist() {
  const { SetCurrent, currentSong, songslist } = useContext(playerContext)

  const [likedSongs, setLikedSongs] = useState(songslist.map(() => false));

  const toggleLikedSong = (index) => {
    const updatedLikedSongs = [...likedSongs];
    updatedLikedSongs[index] = !updatedLikedSongs[index];
    setLikedSongs(updatedLikedSongs);
  }

  return (
    <div className="playlist no_drag">
      {/* <div className="header">
        <h4 className="pltext">Songs by artist</h4>
      </div> */}
      <ul className="loi">
        {songslist.map((song, i) => (
          <li
            className={'songContainer ' + (currentSong === i ? 'selected' : '')}
            key={i}
            onClick={() => {
              SetCurrent(i)
            }}
          >
            <div className="tmbn_song">
              <PlayArrowIcon/>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
              <span onClick={() => { toggleLikedSong(i); }}>
                <span className={!likedSongs[i] ? '' : 'hide'}>
                  <FavoriteBorderIcon/>
                </span>
                <span className={!likedSongs[i] ? 'hide' : ''}>
                  <FavoriteIcon/>
                </span>
                </span>
                </button>
              <button className="options_song playlist_btn">
                <i class="fas fa-ellipsis-v fa-lg"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
