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
        scope: {
            items: '='
        },
        replace: true,
        link: function($scope, $sce) {
            $scope.getDateString = function(date) {
                return date.toString();
            };
            $scope.trust = function(html) {
                console.log(html);
                return html;
            };
        }
    };
});
