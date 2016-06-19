'use strict';

var model = {
	navHead: [
		{
			headers: "Home",
			divID: "home"
		},
		{ 
			headers: "Wedding",
			divID: "info"
		}, 
		{
			headers: "Accommodations",
			divID: "accommodations"
		},
		{
			headers: "Things to Do",
			divID: "things"
		}
	],
	weddingInfo: [
		{
			header: 'The Wedding',
			location: 'December 31, 2016',
			address: '2:00pm',
			directions: ko.observable(false)
		},
		{
			header: "The Ceremony",
			location: "St. Mark's Catholic Church",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			directions: ko.observable(false)
		},
		{
			header: "The Reception",
			location: "TBD",
			address: "514 Sunset Drive, Downingtown, PA",
			directions: {
				text: "Directions",
				href: "https://www.google.com/maps/dir/"+
					"/Crystal+Point+Inn,+3900+River+Rd,+Point+Pleasant,+NJ"+
					"+08742/@40.0954926,-74.0891644,17z/data=!4m16!1m7!3m6!1"+
					"s0x89c18682b7849b41:0x9fe4461d1758c521!2sCrystal+Point+Inn!"+
					"3b1!8m2!3d40.0954926!4d-74.0869757!4m7!1m0!1m5!1m1!1s0x"+
					"89c18682b7849b41:0x9fe4461d1758c521!2m2!1d-74.0869757"+
					"!2d40.0954926"
				}
		}
	],
	accommodationsInfo: [
		{
			header: 'Airports',
			location: 'JFK',
			address: '2:00pm',
			directions: ko.observable(false)
		},
		{
			header: "LGA",
			location: "ERrtahng",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			directions: ko.observable(false)
		},
		{
			header: "Accommodations",
			location: "TBD",
			address: "514 Sunset Drive, Downingtown, PA",
			directions: {
				text: "Directions",
				href: "https://www.google.com/maps/dir/"+
					"/Crystal+Point+Inn,+3900+River+Rd,+Point+Pleasant,+NJ"+
					"+08742/@40.0954926,-74.0891644,17z/data=!4m16!1m7!3m6!1"+
					"s0x89c18682b7849b41:0x9fe4461d1758c521!2sCrystal+Point+Inn!"+
					"3b1!8m2!3d40.0954926!4d-74.0869757!4m7!1m0!1m5!1m1!1s0x"+
					"89c18682b7849b41:0x9fe4461d1758c521!2m2!1d-74.0869757"+
					"!2d40.0954926"
				}
		}
	],
	thingsInfo: [
		{
			header: 'Things',
			location: 'December 31, 2016',
			address: '2:00pm',
			directions: ko.observable(false)
		},
		{
			header: "Things Info",
			location: "St. Mark's Catholic Church",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			directions: ko.observable(false)
		},
		{
			header: "More Things Info",
			location: "TBD",
			address: "514 Sunset Drive, Downingtown, PA",
			directions: {
				text: "Directions",
				href: "https://www.google.com/maps/dir/"+
					"/Crystal+Point+Inn,+3900+River+Rd,+Point+Pleasant,+NJ"+
					"+08742/@40.0954926,-74.0891644,17z/data=!4m16!1m7!3m6!1"+
					"s0x89c18682b7849b41:0x9fe4461d1758c521!2sCrystal+Point+Inn!"+
					"3b1!8m2!3d40.0954926!4d-74.0869757!4m7!1m0!1m5!1m1!1s0x"+
					"89c18682b7849b41:0x9fe4461d1758c521!2m2!1d-74.0869757"+
					"!2d40.0954926"
				}
		}
	],

	mainSect: [
	/*	{
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
		},*/
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
	//	picSwap();
	//	slider.init();
		counter.init();
	}
};

var counter = {
	init: function(){
		var count = document.getElementsByClassName('counter')[0];
		var bigDay = new Date(2016, 11, 31);
		var today = new Date();
		var daysLeft_ms = bigDay - today;
		var one_day = 1000*60*60*24;
		var daysLeft = Math.round(daysLeft_ms/one_day);

		console.log(count, bigDay, today, daysLeft, daysLeft_ms, one_day);


		//console.log(daysLeft);
		count.innerHTML = daysLeft;


	}
};


/*function picSwap () {
  $( ".left" ).animate({
    opacity: 0.75,
    height: "toggle"
  }, 1400, function() {
  	$(".left").fadeOut(1000);
  	$(".right").fadeOut(1000);
  	$(".both").fadeIn(1200); 
  })

};*/

/**** slider credit goes to kentowatanabe, found at: 
 	[http://www.jqueryscript.net/demo/Simplest-Fullscreen
 		-Background-Slideshow-With-jQuery-Chocolate-js/]
 ****/


var toggle = {
	nav: function(clicked) {
		var classed = "." + clicked.divID;
		console.log(clicked);
		console.log(classed);
		$('.all').hide();
		$('.rest').show();
		$(classed).fadeIn('slow', function(){});

	//	$('html, body').animate({
	  //      scrollTop: $(classed).offset().top
	    //}, 800);
	},

	top: function(clicked) {
		$('.show').fadeIn();
		$('html, body').animate({
	        scrollTop: $(".top").offset().top
	    }, 800);
	   // $(".main").hide();
	}
}

ko.applyBindings(viewModel.init());

