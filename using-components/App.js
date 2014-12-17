/**
 * This example introduces the concept of configuring and
 * adding components to an app and connecting them with events.
 */
Ext.define('Rally.gettingstarted.UsingComponents', {
    extend: 'Rally.app.App',
    
    /**
     * The app execution entry point
     */
    launch: function() {
        //Add a combobox displaying the available
        //defect priorities.  Wire up event listeners for
        //when the combobox is initially loaded and when
        //its value changes
    },

    /**
     * Once the priority combobox has been loaded
     * add a grid of defects for the selected priority
     */
    _onLoad: function() {
    },

    /**
     * Refresh the grid when the combobox changes value
     */
    _onSelect: function() {
    }
});
