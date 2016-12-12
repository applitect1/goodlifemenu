'use strict';

app.home = kendo.observable({
    onShow: function() {
	},
    afterShow: function() {},
	data: [
		{
		"url": "https://cdn2.bigcommerce.com/server4600/6ht73/product_images/theme_images/wonderland_slider.jpg?t=1470408859",
		"title": "Wonderland Collection"
		},
		{
		"url": "https://cdn2.bigcommerce.com/server4600/6ht73/product_images/theme_images/crusher_slider.jpg?t=1470408859",
		"title": "Wonderland Collection"
		},
		{
		"url": "https://cdn2.bigcommerce.com/server4600/6ht73/product_images/theme_images/hypkng__80146.jpg?t=1470408859",
		"title": "Wonderland Collection"
		},
		{
		"url": "https://cdn2.bigcommerce.com/server4600/6ht73/product_images/theme_images/greatestdrips_slide.jpg?t=1470408859",
		"title": "Wonderland Collection"
		}
	]
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home