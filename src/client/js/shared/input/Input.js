import React from 'react';
import glamorous, { Div } from 'glamorous';

const InputWrapper = glamorous.input({
  width: '100%',
  padding: 10,
  outline: 'none',
  ':focus': {}
});

const Input = props => (
  <Div marginBottom={20}>
    <InputWrapper {...props} />
  </Div>
);

export default Input;
