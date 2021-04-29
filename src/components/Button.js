import PropTypes from 'prop-types'

// since it's a component, it won't always have the same click,
// so instead of onClick =(e)=> {  
// make  event a prop that we are going to send back up the chain
const Button = ({ color, text, onClick }) => {

  return (
    <button
      style={{ backgroundColor: color }}
      className='btn'
      onClick={onClick}
      >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

// the first prop is small p, second one capital!!
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
