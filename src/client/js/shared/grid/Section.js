import React from 'react';
import glamorous from 'glamorous';

const SectionWrapper = glamorous.div(
  {},
  ({ backgroundColor, padding, color }) => ({
    backgroundColor,
    padding,
    color
  })
);

const Section = ({ children, ...rest }) => {
  return <SectionWrapper {...rest}>{children}</SectionWrapper>;
};
export default Section;
