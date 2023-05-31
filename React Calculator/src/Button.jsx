import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button({ label, className, onClick }) {
  return <button type="button" className={className} onClick={onClick}>{label}</button>
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
}

export default Button
