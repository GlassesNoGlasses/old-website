import { Intro } from './Intro'
import PropTypes from 'prop-types'
import { Languages } from './Languages'
import { Icons } from './Icons'
import Campfire from './Campfire'
import fire from '../../sounds/fire.mp3'

export const Header = (props) => {
  return (
    <header>
        <Intro />
        <Icons ref1={"https://www.linkedin.com/in/neil-wang-y007/"}
        ref2={"https://github.com/GlassesNoGlasses"}
        ref3={"https://www.instagram.com/neil_wang1/"}/>
        <Languages />
        <Campfire sound={fire} />
    </header>
  )
}

// defines the prop type; catches errors
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// default value for props
Header.defaultProps = {
    title: 'Boo!',
}

// // define styles; is object
// const headerStyle = {
//     color: "red",
//     backgroundColor: "black",
// }
