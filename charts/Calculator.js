Ext.define('Calculator', {

    config: {
        bucketBy: 'release',
        aggregateBy: 'count'
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    prepareChartData: function (store) {
        var groupedData = this._groupData(store.getRange()),
            categories = this._getCategories(groupedData),
            seriesData = this._getSeriesData(groupedData);

            return {
                categories: categories,
                series: [
                    {
                        name: 'Feature Throughput',
                        type: 'column',
                        data: seriesData
                    }
                ]
            };
    },

    _groupData: function (records) {
        //group the data into buckets by release name
        //hint: _.groupBy
    },

    _getCategories: function(groupedData) {
        //get the list of release names
        //hint: _.keys
    },

    _getSeriesData: function(groupedData) {
        //compute the total in each bucket
        //example: [['Release 1', 50], ['Release 2', 35]]
        //hint: _.map
    }
});
