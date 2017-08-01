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
            categories = _.keys(groupedData),
            seriesData;

             if(this.aggregateBy === 'count') {
                seriesData = _.map(groupedData, function(value, key) {
                    return [key, value.length];
                });
            }
          
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
        return _.groupBy(records, function (record) {
            if (this.bucketBy === 'release') {
                return record.get('Release')._refObjectName;
            }
        }, this);
    }
});
