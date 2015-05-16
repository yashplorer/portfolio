var data = [
	{
		"header": "WELCOME",
		"info": "",
		"bg": "welcome",
		"content": ""
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test",
		"content": "pc"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test2",
		"content": "button"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test3",
		"content": "swiss"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test4",
		"content": "album"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test5",
		"content": "cert"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test6",
		"content": "itinerary"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		"bg": "test7",
		"content": "ark"
	},
	{
		"header": "",
		"info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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
	$('html, body').animate({scrollTop:(scrollVal)});
}

var showInfo = function() {
	$('p').css('display', 'visible');
}