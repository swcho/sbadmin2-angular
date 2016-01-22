/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('SBAdmin2').directive('sidebarSearch', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/sidebar/sidebar-search/sidebar-search.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {
            $scope.selectedMenu = 'home';
        }
    };
});
