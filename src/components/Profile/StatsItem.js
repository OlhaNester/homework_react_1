import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
