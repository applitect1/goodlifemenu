'use strict';

app.flavorProfiles = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
	onClick: function(e) {
		e.preventDefault();
		var filtername = $(e.target).data('filtername');
		app.filtertype = "profile";
		app.filtername = filtername;
		app.mobileApp.navigate('components/flavors/view.html');
	}
});
app.localization.registerView('flavorProfiles');

// START_CUSTOM_CODE_flavorProfiles
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_flavorProfiles