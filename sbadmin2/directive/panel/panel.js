
angular.module('SBAdmin2').directive('panel', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ico: '@',
			title: '@',
			menuItems: '@'
		},
		transclude: true,
		templateUrl: 'sbadmin2/directive/panel/panel.html'
	};
});
