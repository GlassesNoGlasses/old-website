import PropTypes from 'prop-types'
import github from '../../images/github.svg'
import linkedin from '../../images/instagram.svg'
import instagram from '../../images/instagram.svg'
import './icons.css'

export const Icons = (props) => {
    return (
        <div className='icon-container'>
            <a href={props.ref1} target='_blank' rel="noreferrer">
                <img className='icon-images' src={props.icn1} alt='1'></img>
            </a>
            <a href={props.ref2} target='_blank' rel="noreferrer">
                <img className='icon-images' src={props.icn2} alt='2'></img>
            </a>
            <a href={props.ref3} target='_blank' rel="noreferrer">
                <img className='icon-images' src={props.icn3} alt='3'></img>
            </a>
        </div>
    );
}

Icons.propTypes = {
    icn1: PropTypes.string,
    icn2: PropTypes.string,
    icn3: PropTypes.string,
    ref1: PropTypes.string,
    ref2: PropTypes.string,
    ref3: PropTypes.string,
}

const currentUrl = window.location.href;
// default value for props
Icons.defaultProps = {
    icn1: linkedin,
    icn2: github,
    icn3: instagram,
    ref1: currentUrl,
    ref2: currentUrl,
    ref3: currentUrl,
}
