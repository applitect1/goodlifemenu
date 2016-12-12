'use strict';

app.bestSellers = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
	data: [
		{
			"name": "deadly-sin",
			"title": "Deadly Sin",
			"description": "A sweet, bakery kind of tobaccoish type vape. A description will never do this one justice. Some flavors are made for each other and blend perfectly. The throat hit is there, the flavor is outstanding, this is the high VG version of the original Deadly Sin. Will leave your surroundings smelling like fresh baked cookies and cakes! I have been told that this is very similar to a Crispy treat as well as Cinnamon Buns.",
			"imageurl": "http://cdn2.bigcommerce.com/server4600/6ht73/products/274/images/685/Deadly_Sin__77671.1435544405.220.290.png?c=2",
			"collection": "signature",
			"filter1": "bakery",
			"filter2": "tobacco",
			"filter3": "creamy"
		},
		{
			"name": "orange-blossom",
			"title": "Orange Blossom",
			"description": "A sweet, bakery kind of tobaccoish type vape. A description will never do this one justice. Some flavors are made for each other and blend perfectly. The throat hit is there, the flavor is outstanding, this is the high VG version of the original Deadly Sin. Will leave your surroundings smelling like fresh baked cookies and cakes! I have been told that this is very similar to a Crispy treat as well as Cinnamon Buns.",
			"imageurl": "http://cdn2.bigcommerce.com/server4600/6ht73/products/274/images/685/Deadly_Sin__77671.1435544405.220.290.png?c=2",
			"collection": "signature",
			"filter1": "bakery",
			"filter2": "creamy",
			"filter3": "fruit"
		},
	]
});
app.localization.registerView('bestSellers');

// START_CUSTOM_CODE_bestSellers
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_bestSellers