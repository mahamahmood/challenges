import React, { useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = () => {
    const prepareData = (data) => {
        // console.log(data)
        const chartData = {
            labels: [],
            datasets: [
                {
                    label: 'Pints Sold',
                    data: [],
                }
            ],
        };
        // console.log(chartData)
        data.pints.forEach(pint => {
            // console.log(data)
            chartData.labels.push(pint.month);
            chartData.datasets[0].data.push(pint.pints_sold);
        });
        // console.log(chartData)
        return chartData
    };
    const createChart = (data) => {
        const ctx = document.querySelector("#pints");
        const salesChart = new Chart(ctx, {
            type: "line",
            data: data,
        });
    };

    const getData = async () => {
        try {
            const response = await fetch('ice_creams/1');
            const data = await response.json();
            const jData = await prepareData(data);
            console.log(data)
            createChart(jData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Pints</h1>
            <canvas id="pints" width="300" height="100"></canvas>
        </>
    )
}

export default LineChart;