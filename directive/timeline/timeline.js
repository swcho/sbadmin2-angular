/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('timeline', function () {
    'use strict';
    return {
        templateUrl: 'directive/timeline/timeline.html',
        restrict: 'E',
        replace: true
    };
});