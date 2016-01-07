/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbadmin2').directive('timeline', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/timeline/timeline.html',
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
