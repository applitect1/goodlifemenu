'use strict';

app.home = kendo.observable({
    onShow: function() {
	},
    afterShow: function() {},
	data: [
		{
		"url": "http://www.goodlifedistro.com/menuimages/ipad_welcome.jpg",
		"title": "Welcome"
		}
	]
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home