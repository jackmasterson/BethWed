'use strict';

var model = {
	mainSect: [
		{
			sect: 'Home',
			header: 'Beth Masterson and Andrew Knapp',
			backImg: 'url(..//Beth/img/flowers.jpeg)',
			divID: 'home',
			ceremony: [
				{
					header: 'December 31, 2016',
					subHead: '',
					location: '',
					url: '',
					id: 'home-ul-id'
				}
			]
		},
		{
			sect: 'Details',
			header: 'Ceremony and Reception Details',
			backImg: 'url(..//Beth/img/bride.jpg)',
			divID: 'details',
			ceremony: [
				{
					header: "Ceremony",
					subHead: "St. Mark's Church",
					location: "Sea Girt, NJ 08750",
					url: "google.com/maps",
					id: 'ceremony-ul-id'
				},
				{
					header: "Reception",
					subHead: "Spring Lake Bath & Tennis Club",
					location: "Spring Lake, NJ 07762",
					url: "google.com/maps",
					id: 'ceremony-ul-id'
				}
			]
		},
		{
			sect: 'Hotels',
			header: 'Hotel Information',
			backImg: 'url(..//Beth/img/hotel.jpeg)',
			divID: 'hotels',
			ceremony: [
				{
					header: "Essex Hotel",
					subHead: "(908) 908 9089",
					location: "Sea Girt, NJ 08750",
					url: "google.com/maps",
					id: 'hotels-ul-id'
				},
				{
					header: "Sussex Hotel",
					subHead: "(809) 809 9809",
					location: "Spring Lake, NJ 07762",
					url: "google.com/maps",
					id: 'hotels-ul-id'
				},
				{
					header: "Morrison Hotel",
					subHead: "(433) 908 43333",
					location: "Avon, NJ 07762",
					url: "google.com/maps",
					id: 'hotels-ul-id'
				}
			]
		}	
	],


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

var toggle = {
	nav: function(clicked) {
		console.log(clicked);
	//	console.log(clicked);
		$('.main').hide();
		//$('.explain').hide();
		//$('.scroll-up').show();
		//$('.port-nav-img-div').hide();
	//	$('#collapseThree').fadeIn();
		var classed = "#" + clicked.divID;
		console.log(classed);

	//	console.log(this);
		//console.log(this);
		$(classed).fadeIn('slow', function(){});
	}
}

ko.applyBindings(viewModel.init());

