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
			headers: "Where to Stay",
			divID: "stay"
		},
		{
			headers: "How to Get Here",
			divID: "travel"
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
				"with our family and friends. We hope you can join us!",
			scroll: ko.observable(false),
			ulClass: 'info'
		},
		{
			header: "The Ceremony",
			time: "2:00pm",
			location: "St. Mark's Catholic Church",
			address: "215 Crescent Parkway, Sea Girt, NJ 08750",
			src: "img/marks.jpg",
			directions: "Sea Girt, NJ 08750",
			description: ko.observable(false),
			scroll: ko.observable(false),
			ulClass: 'info'
		},
		{
			header: "The Reception",
			time: "",
			description: "The Crystal Point is a 15-minute drive "+
				"from St. Mark's Church.",
			location: "Crystal Point Yacht Club",
			address: "3900 River Road",
			directions: "Point Pleasant Beach, NJ 08742",
			src: "img/reception.jpg",
			scroll: ko.observable(false),
			ulClass: 'info'/*,
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
		},
	],
	whereToStay:[
			{
				header: "Crystal Point Inn",
				time: "3900 River Road",
				location: "Point Pleasant, NJ",
				address: "There is a motel onsite at the reception venue, the Crystal Point Inn. This is an affordable and convenient option, just a quick walk across the parking lot.",
				description: "To reserve a room, please contact the Crystal Point Inn directly at (732) 899-3444 to access the wedding block.",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'stay'
			},
			{
				header: "Chateau Inn and Suites",
				time: "500 Warren Avenue",
				location: "Spring Lake, NJ",
				address: "The Chateau in Spring Lake is just a short walk from the beach and boardwalk, as well as from the charming Third Avenue shops, boutiques, antique stores, galleries and restaurants. It features a mix of guest rooms, suites and parlors.",
				description: "Room block information to come.",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'stay'
			},
			{
				header: "The Breakers on the Ocean",
				time: "1507 Ocean Avenue",
				location: "Spring Lake, NJ",
				address: "The Breakers is a historic hotel located steps from Spring Lake's two mile-long oceanfront and is walking distance to Spring Lake town.",
				description: ko.observable(false),
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'stay'
			},
			{
				header: "Airbnb",
				time: ko.observable(false),
				location: '',
				address: "Since the Jersey Shore is full of summer residents and beach houses, Airbnb is a great choice for stays during the winter season. Local towns include Sea Girt (where the ceremony will take place), Point Pleasant (where the reception will take place), Spring Lake and Manasquan.",
				description: ko.observable(false),
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'stay'
			}
	],
	howToGetThere: [
			{
				header: "Closest Airports",
				time: "Newark Liberty Airport (EWR)",
				location: "Approximately a 45 minute drive",
				address: "Connects to NJ Transit",
				description: "",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'travel'
			},
			{
				header: "",
				time: "Atlantic City International Airport (ACY)",
				location: "Approximately a 60 minute drive",
				address: "Spirit Airlines Only",
				description: "",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'travel'
			},			
			{
				header: "",
				time: "Philadelphia International Airport",
				location: "Approximately a 75 minute drive",
				address: "",
				description: "",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'travel'
			},			
			{
				header: "Trains From New York City Area",
				location: "NJ Transit - North Jersey Coast Line to Spring Lake Station",
				time: "",
				address: "",
				description: "",
				directions: ko.observable(false),
				src: ko.observable(false),
				scroll: ko.observable(false),
				ulClass: 'travel'
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
		console.log(clicked.divID);
		var classed = "." + clicked.divID;
		$('.hide').hide();
		$('.all').hide();
		$(classed).show();
		$('.rest').show();
		if(classed === '.home'){
			$('.rest').hide();
		}
		window.scrollTo(0,0);
		$(classed).fadeIn('slow', function(){
		});

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

