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
        var context = this.getContext();

        //Display the current workspace name
        this._displayContextValue('Workspace: ' + context.getWorkspace().Name);

        //Display the current project name
        this._displayContextValue('Project: ' + context.getProject().Name);

        //Display the current user's name
        this._displayContextValue('User: ' + context.getUser().UserName);

        //Display the current subscription type
        this._displayContextValue('Subscription type: ' + context.getSubscription().SubscriptionType);

        //Display the current workspace's datetime format
        var workspaceConfig = context.getWorkspace().WorkspaceConfiguration;
        this._displayContextValue('Workspace datetime format: ' + workspaceConfig.DateTimeFormat);

        //Display the current user's timezone
        var userProfile = context.getUser().UserProfile,
            timeZone = userProfile.TimeZone || workspaceConfig.TimeZone;
        this._displayContextValue('Timezone: ' + timeZone);

        //Display the current user's permission level
        //Sub Admin? Workspace Admin? Project Admin? Project Editor? Project Viewer?
        var permissions = context.getPermissions();
        if(permissions.isSubscriptionAdmin()) {
            this._displayContextValue('User is a sub admin.');
        } else if(permissions.isWorkspaceAdmin(context.getWorkspace())) {
            this._displayContextValue('User is a workspace admin.');
        } else if(permissions.isProjectAdmin(context.getProject())) {
            this._displayContextValue('User is a project admin.');
        } else if(permissions.isProjectEditor(context.getProject())) {
            this._displayContextValue('User is a project editor.');
        } else {
            this._displayContextValue('User is a project viewer.');
        }

        //Is the global project scoping the same as this context's project scoping?
        var globalScope = context.getGlobalContext(),
            globalProjectRef = Rally.util.Ref.getRelativeUri(globalScope.getProject()),
            appProjectRef = Rally.util.Ref.getRelativeUri(context.getProjectRef()),
            same = globalProjectRef === appProjectRef;
        if(same) {
            this._displayContextValue('Global project scope is the same');
        } else {
            this._displayContextValue('Global project scope: ' + globalScope.getProject().Name);
        }

        //Is there a timebox scope specified (iteration or release)?
        var timeboxScope = context.getTimeboxScope(),
            type = timeboxScope && timeboxScope.getType(),
            record = timeboxScope && timeboxScope.getRecord();
        if(timeboxScope) {
            this._displayContextValue('Timebox scope: ' + type + ', value: ' + 
                    (record ? record.get('Name') : 'Unscheduled'));
        } else {
            this._displayContextValue('No timebox scope');
        }
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
