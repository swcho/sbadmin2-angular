/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('header', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/header/header.html',
        restrict: 'E',
        replace: true
    };
});


