var dcApp = angular.module("dcApp", []);

dcApp.directive("helloName", function () {
  return {
    scope: {
      name: "@"
    },
    restrict: "E",
    templateUrl: "hello-name.html",
    replace: true,
    link: function (scope, element, attrs) {
      if (attrs.hasOwnProperty("autofocus")) {
        element.find("input")[0].focus()
      }
    }
  };
});
