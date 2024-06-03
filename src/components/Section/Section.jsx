import React from "react";
import styles from '../Section/Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={styles.divSection}>
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;