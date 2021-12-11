import React from 'react';
import ExpenseChart from './ExpenseChart';

function ChartComponent(props)
{
    const chartDataPoints=[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},
    ];
    for(const expense of props.expenses)
    {
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth]+=expense.amount;
    }
    return <ExpenseChart dataPoints={chartDataPoints}></ExpenseChart>
}
export default ChartComponent;