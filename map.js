Highcharts.getJSON('data.json', function (data) {

    Highcharts.mapChart('map', {
        chart: {
            borderWidth: 1,
            map: 'custom/world'
        },

        title: {
            text: 'People fully vaccinated against covid-19',
            style: {"fontSize": "25px" },
        },

        subtitle: {
            text: 'source: Kaggle updated 16/03/2021',
            style: {"fontSize": "15px" },
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Vaccinations',
            joinBy: ['iso-a3', 'code3'],
            data: data,
            minSize: 4,
            maxSize: '20%',
            tooltip: {
                pointFormat: '{point.properties.iso-a3}: {point.z} <br/> vaccines: {point.vaccines}',
                
            }
        }]
    });
});