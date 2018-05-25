import React from 'react';
import glamorous from 'glamorous';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const ButtonWrapper = glamorous.button(
  {
    border: 'none',
    outline: 'none',
    borderRadius: 4,
    padding: '15px 20px',
    fontSize: '14px',
    transition: 'background-color .2s, color 200ms'
  },
  ({ bgColor, disabled, textColor }) => ({
    backgroundColor: disabled ? '#EEEEEE' : bgColor,
    color: disabled ? '#AAAAA' : textColor,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ':hover': {
      backgroundColor: disabled ? '' : darken(0.07, bgColor)
    }
  })
);

const Button = props => (
  <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  bgColor: '#EEEEEE',
  textColor: '#fff',
  onClick: () => {}
};

export default Button;
