/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('chat', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/chat/chat.html',
        restrict: 'E',
        replace: true,
        scope: {
            title: '@'
        }
    };
});
