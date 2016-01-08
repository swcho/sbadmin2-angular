/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('chat', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/chat/chat.html',
        restrict: 'E',
        replace: true,
        scope: {
            title: '@'
        }
    };
});
