import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, buttonType, buttonAction, extraClassName }) => {
  return (
    <button
      className={extraClassName}
      type={buttonType}
      onClick={buttonAction}>
      {children}
    </button>
  );
};

Button.propTypes = {
  extraClassName: PropTypes.string,
  children: PropTypes.any,
  buttonType: PropTypes.oneOf(['button', 'submit']),
  buttonAction: PropTypes.func,
};

Button.defaultProps = {
  extraClassName: '',
  children: undefined,
  buttonType: 'button',
  buttonAction: () => {},
};

export default Button;
