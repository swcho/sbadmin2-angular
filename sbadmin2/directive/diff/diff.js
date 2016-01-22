angular.module('SBAdmin2').directive('diff', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			diffValue: '=',
			diffGood: '@'
		},
		templateUrl: 'sbadmin2/directive/diff/diff.html',
		link: function(scope, element, attrs, fn) {

		}
	};
});
