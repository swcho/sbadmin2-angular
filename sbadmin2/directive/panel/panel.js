
angular.module('sbadmin2').directive('panel', function(SBADMIN2_ROOT) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ico: '@',
			title: '@',
			menuItems: '@'
		},
		transclude: true,
		templateUrl: SBADMIN2_ROOT + 'directive/panel/panel.html'
	};
});
