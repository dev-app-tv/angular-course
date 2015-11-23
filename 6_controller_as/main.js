var app = angular.module('myApp', []);

app.controller('ParentController', function ($rootScope) {
	//$scope.name = "Parent";
	//
	//$scope.reset = function () {
	//	$scope.name = "Parent";
	//};
	this.name = "parent";

});

app.controller('ChildController', function ($rootScope) {
	this.name = "child";

	// $scope.reset = function () {
	// 	$rootScope.name = "Reset By Child";
	// };

});
