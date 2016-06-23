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
			divID: "small-nav"
		},
		{
			headers: "Things to Do",
			divID: "things"
		}
	],
	weddingInfo: [
		{
			header: 'The Wedding',
			time: ko.observable(false),
			location: 'Saturday, December 31, 2016',
			address: ko.observable(false),
			src: ko.observable(false),
			directions: ko.observable(false),
			description: "We met at a New Year's Eve party in Boston. "+
				"We can't think of anything more fun than ringing in 2017 "+
				"with our family and friends. We hope you can join us!"
		},
		{
			header: "The Ceremony",
			time: "2:00pm",
			location: "St. Mark's Catholic Church",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			src: "img/church.png",
			directions: "Sea Girt, NJ 08750",
			description: ko.observable(false)
		},
		{
			header: "The Reception",
			time: "7:00pm",
			description: "The Crystal Point is a 15-minute drive "+
				"from St. Mark's Church. Even in winter, the Jersey Shore "+
				"has plenty of things to do between the ceremony and reception.",
			location: "Crystal Point Yacht Club",
			address: "3900 River Road",
			directions: "Point Pleasant Beach, NJ 08742",
			src: "img/reception.png"/*,
			directions: {
				text: "Directions",
				href: "https://www.google.com/maps/dir/"+
					"/Crystal+Point+Inn,+3900+River+Rd,+Point+Pleasant,+NJ"+
					"+08742/@40.0954926,-74.0891644,17z/data=!4m16!1m7!3m6!1"+
					"s0x89c18682b7849b41:0x9fe4461d1758c521!2sCrystal+Point+Inn!"+
					"3b1!8m2!3d40.0954926!4d-74.0869757!4m7!1m0!1m5!1m1!1s0x"+
					"89c18682b7849b41:0x9fe4461d1758c521!2m2!1d-74.0869757"+
					"!2d40.0954926"
				}*/
		}
	],
	accommodationsInfo: 
		[
			{
				name: "Essex Hotel",
				number: "(908) 908 9089",
				location: "Sea Girt, NJ 08750",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(true),
				airport: ko.observable(false)
			},
			{
				name: "Sussex Hotel",
				number: "(809) 809 9809",
				location: "Spring Lake, NJ 07762",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(true),
				airport: ko.observable(false)
			},
			{
				name: "Morrison Hotel",
				number: "(433) 908 43333",
				location: "Avon, NJ 07762",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(true),
				airport: ko.observable(false)
			},
			{
				name: "JFK",
				number: "(657) 567 6049",
				location: "NYC",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(false),
				airport: ko.observable(true)
			},
			{
				name: "LGA",
				number: "(254) 674 9304",
				location: "NYC",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(false),
				airport: ko.observable(true)
			},
			{
				name: "Philadelphia",
				number: "(654) 439 5679",
				location: "Philadelphia ",
				map: "google.com/maps",
				site: "https://www.jack-masterson.com",
				hotel: ko.observable(false),
				airport: ko.observable(true)
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
			location: "Lorem ipsum doler etsa tu para tael en franco",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			directions: ko.observable(false)
		},
		{
			header: "More Things Info",
			location: "Carte blanche duboise idaho you dah hoe lee trinity",
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
		console.log(today);

		var daysLeft_ms = bigDay - today;
		console.log(daysLeft_ms);
		var one_day = 1000*60*60*24;
		var daysLeft = Math.floor(daysLeft_ms/one_day);

		count.innerHTML = daysLeft;


	}
};


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
	},

	hotels: function(clicked){
		$('.info-each').hide();
		$('.hotels').fadeIn();
	},

	airports: function(clicked){
		$('.info-each').hide();
		$('.airports').fadeIn();
	}
}

ko.applyBindings(viewModel.init());

