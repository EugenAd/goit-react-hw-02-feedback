import React from 'react';
import styles from './Section.module.css'
import PropTypes from 'prop-types';

function Section({ title, children }) {

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
   };
export default Section;
