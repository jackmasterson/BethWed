'use strict';

var model = {
	mainSect: [
		{
			header: 'Beth Masterson and Andrew Knapp',
			backImg: 'url(..//Beth/img/flowers.jpeg)'
		},
		{
			header: 'Ceremony and Reception Details',
			backImg: 'url(..//Beth/img/bride.jpg)'
		},
		{

			header: 'Hotel Information',
			backImg: 'url(..//Beth/img/hotel.jpeg)'
		}	
	],

	ceremony: [
		{
			header: "Ceremony",
			subHead: "St. Mark's Church",
			location: "Sea Girt, NJ 08750",
			url: "google.com/maps"
		},
		{
			header: "Reception",
			subHead: "Spring Lake Bath & Tennis Club",
			location: "Spring Lake, NJ 07762",
			url: "google.com/maps"
		}
	]
};

var viewModel = {
	init: function() {
		picSwap();
	}
};

		function picSwap () {
		  $( ".left" ).animate({
		    opacity: 0.75,
		    height: "toggle"
		  }, 1400, function() {
		  	$(".left").fadeOut(1000);
		  	$(".right").fadeOut(1000);
		  	$(".both").fadeIn(1200); 
		  })

		};

ko.applyBindings(viewModel.init());

