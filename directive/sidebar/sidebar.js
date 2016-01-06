/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbadmin2').directive('sidebar', ['$location', function () {
    'use strict';
    return {
        templateUrl: 'directive/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        //link: function(scope, element, attrs) {
        //    console.log(attrs);
        //},
        controller: function ($scope) {
            $scope.selectedMenu = 'dashboard';
            $scope.collapseVar = 0;
            $scope.multiCollapseVar = 0;

            $scope.check = function (x) {
                console.log(x);
                if (x === $scope.collapseVar) {
                    $scope.collapseVar = 0;
                } else {
                    $scope.collapseVar = x;
                }
            };

            $scope.multiCheck = function (y) {

                if (y === $scope.multiCollapseVar) {
                    $scope.multiCollapseVar = 0;
                }
                else {
                    $scope.multiCollapseVar = y;
                }
            };
        }
    };
}]);
