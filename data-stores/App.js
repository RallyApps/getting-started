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

    },

    /**
     * Load the defects collection of the first story in the result store.
     * Call _onDefectsLoaded when complete.
     */
    _onStoriesLoaded: function(store, records, success) {

    },

    /**
     * Print the associated defects to the console in FormattedID: Name format.
     */
    _onDefectsLoaded: function(records, operation, success) {

    }
});