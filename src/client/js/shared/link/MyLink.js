import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

const MyLink = glamorous(Link)({
  textDecoration: 'none',
  color: 'black'
});

export default props => {
  return <MyLink {...props} />;
};
