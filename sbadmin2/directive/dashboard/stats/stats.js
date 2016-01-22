/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('stats', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/dashboard/stats/stats.html',
        restrict: 'E',
        replace: true,
        scope: {
            'model': '=',
            'comments': '@',
            'number': '@',
            'name': '@',
            'colour': '@',
            'details': '@',
            'type': '@',
            'goto': '@'
        }
    };
});
