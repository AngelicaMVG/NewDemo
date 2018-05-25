import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const BoxWrapper = glamorous.div(
  {},
  ({
    display,
    direction,
    wrap,
    flow,
    justifyContent,
    alignItems,
    alignContent
  }) => ({
    display,
    flexDirection: direction,
    flexWrap: wrap,
    flexFlow: flow,
    justifyContent,
    alignItems,
    alignContent
  })
);

const Box = ({ children, ...rest }) => (
  <BoxWrapper {...rest}>{children}</BoxWrapper>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['flex', 'inline-flex']),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  wrap: PropTypes.oneOf(['', 'nowrap', 'wrap', 'wrap-reverse']),
  flow: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    '',
    'flex-start',
    'flex-end',
    'center',
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly'
  ]),
  alignItems: PropTypes.oneOf([
    '',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline'
  ]),
  alignContent: PropTypes.oneOf([
    '',
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'space-between',
    'space-around'
  ])
};

Box.defaultProps = {
  display: 'flex',
  direction: 'row',
  wrap: 'nowrap',
  flow: '',
  justifyContent: '',
  alignItems: '',
  alignContent: ''
};
export default Box;
