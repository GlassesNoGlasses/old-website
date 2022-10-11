import React from 'react'
import './campfire.css'

const Campfire = (props) => {
    const fireStart = () => {
        const audio = new Audio(props.sound);
        document.getElementsByClassName('fire')[0].id = 'fireStart';
          audio.volume = 0.5;
          audio.play();
    }
  return (
    <div>
        <button className='fire' onClick={fireStart}></button>
    </div>
  )
}

export default Campfire