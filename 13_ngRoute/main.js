angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(function($routeProvider){
    $routeProvider.when('/view1',{
        controller:'Controller1',
        templateUrl:'partials/view1.html'
    }).when('/view2',{
        controller: 'Controller2',
        templateUrl: 'partials/view2.html'
    }).when('/view3/:id',{
        controller: 'Controller3',
        templateUrl: 'partials/view3.html'
    }).otherwise({
        redirectTo: '/view1'
      });
});

angular.module('myApp').controller('Controller1' ,function($scope){
    $scope.message = "Hello, world";
}).controller('Controller2',function($scope){
    $scope.now = new Date();
}).controller('Controller3',function($scope, $routeParams){
    $scope.word = "I am a robot.["+ $routeParams.id+"]";
});
