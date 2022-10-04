import React from 'react'
import PropTypes from 'prop-types'
import python from '../../images/python.svg'
import javascript from '../../images/javascript.svg'
import c from '../../images/c.svg'
import react from '../../images/react.svg'
import java from '../../images/java.png'
import './icons.css'

export const Languages = (props) => {
  return (
    <div className='icon-container'>
        <img className='icon-languages' src={props.lng1} alt='1'></img>
        <img className='icon-languages' src={props.lng5} alt='5'></img>
        <img className='icon-languages' src={props.lng2} alt='2'></img>
        <img className='icon-languages' src={props.lng3} alt='3'></img>
        <img className='icon-languages' src={props.lng4} alt='4'></img>
    </div>
  )
}

Languages.propTypes = {
    lng1: PropTypes.string,
    lng2: PropTypes.string,
    lng3: PropTypes.string,
    lng4: PropTypes.string,
    lng5: PropTypes.string,
}

// default value for props
Languages.defaultProps = {
    lng1: javascript,
    lng2: react,
    lng3: c,
    lng4: python,
    lng5: java
}
