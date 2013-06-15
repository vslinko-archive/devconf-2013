var dcApp = angular.module("dcApp", []);

dcApp.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "mainpage.html"
  });

  $routeProvider.when("/list", {
    controller: "ListCtrl",
    templateUrl: "list.html"
  });
});

dcApp.controller("ListCtrl", function ($scope, nameGenerator) {
  $scope.names = [];

  for (var i = 0; i < 5; i++) {
    $scope.names.push(nameGenerator.generate());
  }
});

dcApp.filter("reverse", function () {
  return function (str) {
    return str.split("").reverse().join("");
  };
});

dcApp.factory("nameGenerator", function () {
  return {
    generate: function () {
      var names = [
        "Иван",
        "Петр"
      ];

      var index = Math.round(Math.random() * (names.length - 1));

      return names[index];
    }
  }
});

dcApp.directive("helloName", function (nameGenerator) {
  return {
    scope: {},
    restrict: "E",
    templateUrl: "hello-name.html",
    replace: true,
    link: function (scope, element, attrs) {
      scope.name = nameGenerator.generate()

      if (attrs.hasOwnProperty("autofocus")) {
        element.find("input")[0].focus();
      }
    }
  };
});
