var app = angular.module('myApp', []);

app.controller('BookController' , function($scope) {
	$scope.books = ['HTML5','CSS','Responsive Web Design'];
	$scope.name="Scope for BookController";

  $scope.addToWishList=function(book) {
      $scope.wishListCount++;
  };

  $scope.wishListCount = 0;
  var x = $scope.$watch('wishListCount',function(newValue,oldValue){
      console.log('called '+newValue+' times (oldValue='+oldValue+')');
      if(newValue==2){
				alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
        x();  //execute for cancel watch
			}
		});
});
