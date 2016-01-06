/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('header', function () {
    'use strict';
    return {
        templateUrl: 'directive/header/header.html',
        restrict: 'E',
        replace: true
    };
});


