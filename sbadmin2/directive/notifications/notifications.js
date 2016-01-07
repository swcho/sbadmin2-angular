/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('notifications', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/notifications/notifications.html',
        restrict: 'E',
        replace: true,
        scope: {
            items: '='
        }
    };
});
