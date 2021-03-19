Highcharts.getJSON('datavac.json', function (dt) {
    console.log(dt.map(dt =>dt.country.date)[1])


    Highcharts.chart('linechart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Daily vaccinations'
        },
        subtitle: {
            text: 'Source: Kaggle.com'
        },
        xAxis: {
            categories: dt.map(dt =>dt.country.date)[0]
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: dt.map(dt =>Object.values(dt.country))[0][0],
            data: dt.map(dt =>dt.country.z)[0]
        }, {
            name: dt.map(dt =>Object.values(dt.country))[1][0],
            data: dt.map(dt =>dt.country.z)[1]
        },
        {
            name: dt.map(dt =>Object.values(dt.country))[2][0],
            data: dt.map(dt =>dt.country.z)[2]
        },
        {
            name: dt.map(dt =>Object.values(dt.country))[3][0],
            data: dt.map(dt =>dt.country.z)[3]
        },
        ]
    });
});




