import React from 'react';
import ReactPropTypes from 'prop-types';
//import StatisticList from StatisticList.js;

const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">

            {title && <h2 class="title">Upload stats</h2>}

            <ul class="stat-list">
            {stats.map(({ id, label, percentage }) => (<li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
            </li>))}
            
                
        
            </ul>  
        </section>);
    
};

export default Statistics;
