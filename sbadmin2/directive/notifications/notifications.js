/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('notifications', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/notifications/notifications.html',
        restrict: 'E',
        replace: true,
        scope: {
            items: '='
        }
    };
});
