var myApp = angular.module("myList", []);

myApp.controller("myListController", function ($scope) {
  $scope.items = ["Work on task", "Study", "Workout"];

  $scope.pushItem = () => {
    if ($scope.newItem != "") {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
    }
  };

  $scope.deleteItem = (item) => {
    $scope.removedItemIndex = $scope.items.indexOf(item);

    $scope.items.splice($scope.removedItemIndex, 1);
  };
});
