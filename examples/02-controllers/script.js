var dcApp = angular.module("dcApp", []);

dcApp.controller("FirstCtrl", function ($scope) {
  $scope.name = "Ivan";
});

dcApp.controller("SecondCtrl", function ($scope) {
  $scope.name = "Petr";
});
