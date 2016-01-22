/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('header', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/header/header.html',
        restrict: 'E',
        replace: true
    };
});


