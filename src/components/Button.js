import PropTypes from 'prop-types'

// since it's a component, it won't always have the same click,
// so instead of onClick =(e)=> {  
// make  event a prop that we are going to send back up the chain
const Button = ({ text, onClick }) => {

  return (
    <button
      className="btn"
      onClick={onClick}
      >
      {text}
    </button>
  )
}

// the first prop is small p, second one capital!!
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
