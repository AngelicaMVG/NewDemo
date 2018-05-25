import React from 'react';
import glamorous from 'glamorous';
import { PropTypes } from 'prop-types';

const Grid = glamorous.div(
  { height: '100%' },
  ({
    templateColumns,
    templateRows,
    autoColumns,
    autoRows,
    autoFlow,
    gap,
    grid,
    template,
    rowGap,
    columnGap,
    display,
    templateAreas,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent
  }) => ({
    '@supports (display: grid)': {
      display,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      grid,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      gridAutoColumns: autoColumns,
      gridAutoRows: autoRows,
      gridAutoFlow: autoFlow,
      gridGap: gap,
      gridRowGap: rowGap,
      gridColumnGap: columnGap,
      gridTemplate: template,
      gridTemplateAreas: templateAreas
    }
  })
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['grid', 'inline-grid', 'subgrid']),
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  autoRows: PropTypes.string,
  autoColumns: PropTypes.string,
  autoFlow: PropTypes.oneOf(['', 'row', 'column', 'row dense', 'column dense']),
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  grid: PropTypes.string,
  rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  template: PropTypes.string,
  templateAreas: PropTypes.string,
  justifyItems: PropTypes.oneOf(['', 'start', 'end', 'center', 'stretch']),
  alignItems: PropTypes.oneOf(['', 'start', 'end', 'center', 'stretch']),
  justifyContent: PropTypes.oneOf([
    '',
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly'
  ]),
  alignContent: PropTypes.oneOf([
    '',
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly'
  ])
};

Grid.defaultProps = {
  display: 'grid',
  templateColumns: '',
  templateRows: '',
  autoRows: '',
  autoColumns: '',
  autoFlow: '',
  gap: '',
  grid: 'none',
  rowGap: '',
  columnGap: '',
  template: '',
  templateAreas: '',
  justifyItems: '',
  alignItems: '',
  justifyContent: '',
  alignContent: ''
};

export default Grid;
