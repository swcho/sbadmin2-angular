/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('headerNotification', function () {
    'use strict';
    return {
        templateUrl: 'directive/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true
    };
});


