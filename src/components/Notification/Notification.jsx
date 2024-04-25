import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h4 className={styles.notification}>{message}</h4>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
