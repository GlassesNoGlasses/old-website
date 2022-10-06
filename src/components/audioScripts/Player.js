import React from 'react'
import PropTypes from 'prop-types'

const Player = (props) => {
    const audio = new Audio(props.file);
    const playAudio = () => {
      audio.volume = 0.5;
      audio.play();
    }
  return (
    <div>
        <button className='sounds' onClick={playAudio}>Play me</button>
    </div>
  )
}

Player.propTypes = {
    file: PropTypes.string.isRequired,
}

export default Player;
