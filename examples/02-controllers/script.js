var dcApp = angular.module("dcApp", []);

dcApp.controller("FirstCtrl", function ($scope) {
  $scope.name = "Иван";
});

dcApp.controller("SecondCtrl", function ($scope) {
  $scope.name = "Петр";
});
