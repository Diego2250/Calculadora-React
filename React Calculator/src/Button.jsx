import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, className, onClick }) => {
  return <button className={className} onClick={onClick} >{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
