angular.module('app', ['angular-full-width-to-half-width']);

angular.module('app')
    .controller('appController', function ($scope, $filter) {
        $scope.testStringNo = "Hello world!";
        $scope.testString = "ｈえｌｌｏ　ｗｏｒｌｄ！";

        $scope.javascriptTest = $filter('fullWidthToHalfWidth')("Hello world!");
        $scope.javascriptString = $filter('fullWidthToHalfWidth')("ｈえｌｌｏ　ｗｏｒｌｄ！");
    });
