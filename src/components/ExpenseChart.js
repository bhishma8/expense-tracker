import React from 'react';
import ExpenseChartBar from './ExpenseChartBar';
import './ExpenseChart.css';
function ExpenseChart(props)
{   
    const barValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax=Math.max(...barValues)
    return( 
    <div className='chart'>
        {props.dataPoints.map(dataPoint=><ExpenseChartBar value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} key={dataPoint.label}/>)}
    </div>)
}
export default ExpenseChart;