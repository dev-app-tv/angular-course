var myApp = angular.module("myApp", []);

myApp.controller("FormController", function($scope){
	$scope.formData = { 
		name: "sittisin",
		email: "sittisin@dtac.co.th"
	};

	$scope.register = function() {
		alert("registered"+$scope.formData.name);
	};


})
