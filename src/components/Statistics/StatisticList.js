import React from 'react';
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';

const StatisticList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem id={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticList;
