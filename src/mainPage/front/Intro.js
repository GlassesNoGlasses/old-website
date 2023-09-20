import PropTypes from 'prop-types'
import './intro.css'

export const Intro = (props) => {
    return (
        <div className='introContainer'>
            <div className='introText'>{props.initial}</div>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
            <span className='star'></span>
        </div>
    )
}

// defines the prop type; catches errors
Intro.propTypes = {
    initial: PropTypes.string.isRequired,

}

// default value for props
Intro.defaultProps = {
    initial: "N.W.",
}

// // define styles; is object
// const headerStyle = {
//     color: "red",
//     backgroundColor: "black",
// }
