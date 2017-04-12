Ext.define('HelloWorldApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {
        this.add({
            xtype: 'component',
            html: 'Hello World'
        });
    }
});
