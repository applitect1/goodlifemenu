'use strict';

app.collections = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
	onClick: function(e) {
		e.preventDefault();
		var filtername = $(e.target).data('filtername');
		app.filtertype = "collection";
		app.filtername = filtername;
		app.mobileApp.navigate('components/flavors/view.html');
	}
});
app.localization.registerView('collections');

// START_CUSTOM_CODE_collections
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_collections