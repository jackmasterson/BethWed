'use strict';

var model = {
	mainSect: [
		{
			header: 'Beth Masterson and Andrew Knapp',
			backImg: 'url(..//Beth/img/parchment.jpg)'
		},
		{
			header: 'Ceremony and Reception Details',
			backImg: 'url(..//Beth/img/flowers.jpeg)'
		},
		{

			header: 'Hotel Information',
			backImg: 'url(..//Beth/img/hotel.jpeg)'
		}	
	]
};

var viewModel = {
	init: function() {

	}
};

ko.applyBindings(viewModel.init());

