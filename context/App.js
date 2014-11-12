/**
 * This example explores the app context object and
 * displays select information from it using simple components.
 */
Ext.define('Rally.gettingstarted.Context', {
    extend: 'Rally.app.App',
    
    /**
     * The app execution entry point
     */
    launch: function() {

    },

    /**
     * A helper function that will display
     * the specified value in the app.
     */
    _displayContextValue: function(value) {
        this.add({
            xtype: 'component',
            html: value
        });
    }
});
