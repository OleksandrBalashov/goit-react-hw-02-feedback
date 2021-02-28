import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ heading, children }) => (
  <section>
    <h2>{heading}</h2>
    {children}
  </section>
);

Section.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Section;
