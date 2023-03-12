import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from '../context/playerContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ReplayIcon from '@mui/icons-material/Replay';
import ShuffleIcon from '@mui/icons-material/Shuffle';


function Controls() {
  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext)

  const audio = useRef('audio_tag')

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

  const handleVolume = (q) => {
    setStateVolum(q)
    audio.current.volume = q
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum
    if (playing) {
      toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  return (
    <div className="controls">
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songslist[currentSong].fileUrl}
      />
      <div className="vlme">
        <span className="volum">
          <VolumeDownIcon/>
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <SkipPreviousIcon/>
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying()
            toggleAudio()
          }}
        >
          <span className={!playing ? '' : 'hide'}>
          <PlayArrowIcon/>
          </span>
          <span className={!playing ? 'hide' : ''}>
          <PauseIcon/>
          </span>
        </span>

        <span className="next" onClick={nextSong}>
          <SkipNextIcon/>
        </span>
      </div>

      <div className="progressb">
        <div className="songMeta">
          <span className="songtitle">{songslist[currentSong].title}</span>
          <span className="songartistName">
            {songslist[currentSong].artistName}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="currentT">{fmtMSS(currentTime)}</span>/
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>
      <div className="plsoptions">
        <span
          onClick={toggleRandom}
          className={'random ' + (random ? 'active' : '')}
        >
          <ShuffleIcon/>
        </span>
        <span
          onClick={toggleRepeat}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
          <ReplayIcon/>
        </span>
      </div>
    </div>
  )
}

export default Controls
