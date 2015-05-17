var data = [
	{
		"header": "WELCOME",
		"info": "",
		"bg": "welcome",
		"content": ""
	},
	{
		"header": "",
		"info": "Logo for San Mateo High's Programming Club.",
		"bg": "test",
		"content": "pc"
	},
	{
		"header": "",
		"info": "Social Media promotional graphic for Acts of Random Kindness Club.",
		"bg": "test2",
		"content": "button"
	},
	{
		"header": "",
		"info": "Swiss design-inspired promotional material for Art.",
		"bg": "test3",
		"content": "swiss"
	},
	{
		"header": "",
		"info": "Old vs. New album cover art project.",
		"bg": "test4",
		"content": "album"
	},
	{
		"header": "",
		"info": "Scholarship certificate for Rong Hwa Association.",
		"bg": "test5",
		"content": "cert"
	},
	{
		"header": "",
		"info": "Itinerary for a trip to Hawaii.",
		"bg": "test6",
		"content": "itinerary"
	},
	{
		"header": "",
		"info": "A sign up form for Acts of Random Kindness Club.",
		"bg": "test7",
		"content": "ark"
	},
	{
		"header": "",
		"info": "A sign up form for Compass Point Mentorship.",
		"bg": "test8",
		"content": "cpm"
	}
]
angular.module('portfolio-app', [])
	.controller('Lister', ['$scope', function($scope){
		$scope.data = data;
}]);

var scroll = function(direction) {
	var scrollVal = 0;
	if (direction === "down") scrollVal = $(window).scrollTop() + $(window).height();
	else scrollVal = $(window).scrollTop() - $(window).height();
	$(window).scrollTop(scrollVal);
}

var showInfo = function() {
	$('p').css('display', 'visible');
}

$(document).ready(function(){
	$("#info").hover(function() {
		$("p").css("opacity",  0.5);
	}, function() {
		$('p').css("opacity",  0.0);
	});
});