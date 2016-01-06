/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbadmin2').directive('sidebarSearch', function () {
    'use strict';
    return {
        templateUrl: 'directive/sidebar/sidebar-search/sidebar-search.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {
            $scope.selectedMenu = 'home';
        }
    };
});
