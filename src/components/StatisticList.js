import React from 'react';

const StatisticList = ({ stats }) => {
    return (
        <ul class="stat-list">
            {stats.map(({ id, label, percentage }) => (<li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}%</span>
            </li>))}
            
                
        
            </ul>   
    );
};
export default StatisticList;