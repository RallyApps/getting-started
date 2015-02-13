/**
 * This example uses stores to read items from WSAPI
 */
Ext.define('Rally.gettingstarted.DataStores', {
    extend: 'Rally.app.App',
    
    /**
     * The app execution entry point
     */
    launch: function() {
        this._loadStories();
    },

    /**
     * Create a store to load unaccepted stories that
     * have at least one defect associated to it.  The data should be loaded
     * using the current project scoping.  Call _onStoriesLoaded on successful load.
     */
    _loadStories: function() {
        Ext.create('Rally.data.wsapi.Store', {
            model: 'UserStory',
            context: this.getContext().getDataContext(),
            filters: [
                {
                    property: 'ScheduleState',
                    operator: '<',
                    value: 'Accepted'    
                }, 
                {
                    property: 'Defects.ObjectID',
                    operator: '!=',
                    value: null
                }
            ],
            autoLoad: true,
            listeners: {
                load: this._onStoriesLoaded,
                scope: this
            },
            fetch: ['Defects']
        });
    },

    /**
     * Load the defects collection of the first story in the result store.
     * Call _onDefectsLoaded when complete.
     */
    _onStoriesLoaded: function(store, records, success) {
        if(success && store.getCount() > 0) {
            var story = records[0],
                defectsStore = story.getCollection('Defects', {
                    fetch: ['FormattedID', 'Name']
                });

            defectsStore.load({
                callback: this._onDefectsLoaded,
                scope: this
            });
        }
    },

    /**
     * Print the associated defects to the console in FormattedID: Name format.
     */
    _onDefectsLoaded: function(records, operation, success) {
        _.each(records, function(defect) {
            console.log(defect.get('FormattedID') + ':', defect.get('Name'));
        });
    }
});