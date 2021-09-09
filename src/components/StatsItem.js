import React from 'react';
import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity }) => {
  return (
    <li>
      <span class="label">{label}</span>
      <span class="quantity">{quantity}</span>
    </li>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
