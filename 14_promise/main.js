var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('PromiseController', function ($timeout, $scope, $q) {
  var kfcOfficer = $q.defer();

  console.log("kfcOfficer:preparing");
  var order = $timeout(function() {
    console.log("kfcOfficer:cooking done.");
    kfcOfficer.resolve("buffalo wing.");
  },5000);

  var customer = kfcOfficer.promise;

  // customer.then(eatChicken, cancelOrder);
  customer.then(eatChicken).then(changeOrder, cancelOrder);

  $scope.stop = function() {
    clearTimeout(order);
    kfcOfficer.reject("cancel order");
  };

  $scope.change = function() {
    clearTimeout(order);
    kfcOfficer.reject("change order");
  };

  function changeOrder(data) {
    console.info("customer: change order");
  }

  function eatChicken(data){
      console.info("customer:yummy.");
  }

  function cancelOrder(data){
    console.log("in cancelOrder");
    if (data == "change order") {
      return "wait change order";
    } else {
      console.info("customer: ...")
      throw "customer: "+data;
      // console.error("customer: "+data);
    }
  }

});

// angular.module('myApp').controller('ModalController', function($scope, $uibModal) {
// 	$scope.open = function() {
// 		var modalInstance = $uibModal.open({
//       animation: $scope.animationsEnabled,
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       size: 500,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });
// 	}
// });

// angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

//   $scope.ok = function () {
//     $uibModalInstance.close('ok');
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });
