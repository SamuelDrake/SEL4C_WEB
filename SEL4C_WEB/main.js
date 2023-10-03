const getOptionChart1 = () => {
    return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
            {
                data: [
                120,
                {
                    value: 200,
                    itemStyle: {
                    color: '#a90000'
                    }
                },
                150,
                80,
                70,
                110,
                130
                ],
                type: 'bar'
            }
        ]
    };
};

const getOptionChart2 = () => {
    return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
            {
                data: [
                120,
                {
                    value: 200,
                    itemStyle: {
                    color: '#a90000'
                    }
                },
                150,
                80,
                70,
                110,
                130
                ],
                type: 'bar'
            }
        ]
    };
};

const initCharts = () => {
    const chart1 = echarts.init(document.getElementById("chart1"));
    const chart2 = echarts.init(document.getElementById("chart2"));

    chart1.setOption(getOptionChart1());
    chart2.setOption(getOptionChart2());
};

window.addEventListener("load", () => {
    initCharts();
});