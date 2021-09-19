import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function RandomColor() {
  let color = '';
  for (var i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li
      className={styles.item}
      key={id}
      style={{
        backgroundColor: RandomColor(),
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
