Ext.define('Rally.gettingstarted.Chart', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    layout: 'fit',
    autoScroll: false,

    requires: [
        'Calculator'
    ],

    launch: function () {
        this.add({
            xtype: 'rallychart',
            chartColors: [
                "#005EB8" // $blue
            ],
            storeType: 'Rally.data.wsapi.Store',
            storeConfig: this._getStoreConfig(),
            calculatorType: 'Calculator',
            calculatorConfig: {
                bucketBy: 'release',
                aggregateBy: 'count'
            },
            chartConfig: this._getChartConfig()
        });
    },

    _getStoreConfig: function () {
        return {
            model: 'portfolioitem/feature',
            context: this.getContext().getDataContext(),
            limit: Infinity,
            fetch: ['Release'],
            sorters: [{ property: 'Release.ReleaseDate', direction: 'ASC' }],
            filters: [{ property: 'Release', operator: '!=', value: null }],
            pageSize: 2000
        };
    },

    _getChartConfig: function () {
        return {
            chart: { type: 'column' },
            legend: { enabled: false },
            title: {
                text: 'Feature Throughput'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        };
    }
});
