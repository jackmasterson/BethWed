'use strict';

var model = {
	mainSect: [
		{
			sect: 'Home',
			header: 'Beth Masterson and Andrew Knapp',
			backImg: 'url(..//Beth/img/flowers.jpeg)'
		},
		{
			sect: 'Details',
			header: 'Ceremony and Reception Details',
			backImg: 'url(..//Beth/img/bride.jpg)'
		},
		{
			sect: 'Hotels',
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
		slider.init();
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

/**** slider credit goes to kentowatanabe, found at: 
 	[http://www.jqueryscript.net/demo/Simplest-Fullscreen
 		-Background-Slideshow-With-jQuery-Chocolate-js/]
 ****/
var slider = {
	
	init: function() {
		$('.head-div').chocolate({
			images    : ['img/both.jpg', 'img/both-two.jpg', 'img/both-four.jpg'],
			interval : 3500,
			speed: 1000
		});
	}
};

ko.applyBindings(viewModel.init());

