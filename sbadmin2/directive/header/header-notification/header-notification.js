/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('headerNotification', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
        scope: {
            notifications: '='
        }
    };
});


