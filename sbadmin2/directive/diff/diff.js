angular.module('SBAdmin2').directive('diff', function(SBADMIN2_ROOT) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			diffValue: '=',
			diffGood: '@'
		},
		templateUrl: SBADMIN2_ROOT + 'directive/diff/diff.html',
		link: function(scope, element, attrs, fn) {

		}
	};
});
