var app = angular.module('myApp', []);

app.controller('RegisterController', function ($scope) {
	$scope.register = function(isValid) {

	$scope.isUnique = false;
	$scope.myForm.name.$setValidity('unique', $scope.isUnique);

	if (isValid) {
		console.log("register success");
	} else {
		console.error("invalid format")
	}
    
  }
});
