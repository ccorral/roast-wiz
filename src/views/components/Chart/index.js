import React, { Component, PropTypes } from 'react';
import LineChart from 'chart.js';

class Chart extends Component {

    constructor(props) {
        super(props)
        LineChart.defaults.global.tooltips.callbacks.label = function(t, e) { return t.ylabel; }
        this.chart = null
        this.ctx = null
        this.plotChart = this.plotChart.bind(this)
    }

    componentDidMount() {
        this.ctx = document.getElementById("chart");
        this.plotChart()
    }

    plotChart() {
        const { data } = this.props
        const roastTempData = data.roast_temp_data.map(temp => {
            return {
                x: temp.time_stamp,
                y: temp.temperature
            }
        })
        const roastEventKeys = Object.keys(data.roast_events).map(time_stamp => {
            return {
                x: time_stamp,
                y: 250
            }
        })
        const roastEventLabels = Object.keys(data.roast_events).map(time_stamp => {
            return data.roast_events[time_stamp].event_type
        })
        this.chart = new LineChart(this.ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Roast Temperatures',
                    data: roastTempData
                },
                {
                    label: 'Events',
                    labels: roastEventLabels,
                    fill: false,
                    showLine: false,
                    pointBackgroundColor: 'red',
                    pointRadius: 5,
                    data: roastEventKeys                    
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MMM YYYY'
                            }
                        },
                        position: 'bottom'
                    }]
                }
            }
        });
    }

    componentWillUnmount() {
        this.chart.destroy()
        this.chart = null
    }

    render() {
        return (
            <canvas id="chart" style={{ height: '320px', width: '100%', position: 'relative', padding: '10px 20px 40px 20px' }} />
        );
    }

};

Chart.propTypes = {

};

export default Chart;
