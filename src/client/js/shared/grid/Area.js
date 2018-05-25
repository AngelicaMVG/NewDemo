import React from 'react';
import glamorous from 'glamorous';
import { PropTypes } from 'prop-types';

const Area = glamorous.div(
  {},
  ({
    columnStart,
    columnEnd,
    column,
    rowStart,
    rowEnd,
    row,
    area,
    justifyContent,
    alignSelf
  }) => ({
    justifyContent,
    alignSelf,
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridColumn: column,
    gridRow: row,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area
  })
);

Area.propTypes = {
  children: PropTypes.node.isRequired,
  columnStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  column: PropTypes.string,
  rowStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  row: PropTypes.string,
  area: PropTypes.string,
  justifySelf: PropTypes.oneOf(['', 'start', 'end', 'center', 'stretch']),
  alignSelf: PropTypes.oneOf(['', 'start', 'end', 'center', 'stretch'])
};

Area.defaultProps = {
  columnStart: '',
  columnEnd: '',
  column: '',
  rowStart: '',
  rowEnd: '',
  row: '',
  area: '',
  justifySelf: '',
  alignSelf: ''
};

export default Area;
