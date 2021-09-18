import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from './StatisticList';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <StatisticList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
