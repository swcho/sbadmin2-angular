
(function() {
    var sbadmin2 = angular.module('SBAdmin2', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
    sbadmin2.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
    sbadmin2.filter('fromNow', function() {
        return function(dateString) {
            return moment(dateString).fromNow();
        };
    });

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length-1].src.replace('sbadmin2.js', '');

    console.info('SBAdmin2 loaded from: ' + currentScriptPath);

    sbadmin2.constant('SBADMIN2_ROOT', currentScriptPath);

    sbadmin2.config(function($stateProvider) {

        /* Add New States Above */

    });

}());

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('chat', function (SBADMIN2_ROOT) {
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

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('stats', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/dashboard/stats/stats.html',
        restrict: 'E',
        replace: true,
        scope: {
            'model': '=',
            'comments': '@',
            'number': '@',
            'name': '@',
            'colour': '@',
            'details': '@',
            'type': '@',
            'goto': '@'
        }
    };
});

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('headerNotification', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
        scope: {
            notifications: '='
        }
    };
});



/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('header', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/header/header.html',
        restrict: 'E',
        replace: true
    };
});



/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('notifications', function (SBADMIN2_ROOT) {
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


angular.module('SBAdmin2').directive('panel', function(SBADMIN2_ROOT) {
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

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('SBAdmin2').directive('sidebarSearch', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/sidebar/sidebar-search/sidebar-search.html',
        restrict: 'E',
        replace: true,
        scope: {},
        controller: function ($scope) {
            $scope.selectedMenu = 'home';
        }
    };
});

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('SBAdmin2').directive('sidebar', function (SBADMIN2_ROOT) {
    'use strict';
    return {
        templateUrl: SBADMIN2_ROOT + 'directive/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        //link: function(scope, element, attrs) {
        //    console.log(attrs);
        //},
        controller: function ($scope) {
            $scope.selectedMenu = 'dashboard';
            $scope.collapseVar = 0;
            $scope.multiCollapseVar = 0;

            $scope.check = function (x) {
                if (x === $scope.collapseVar) {
                    $scope.collapseVar = 0;
                } else {
                    $scope.collapseVar = x;
                }
            };

            $scope.multiCheck = function (y) {

                if (y === $scope.multiCollapseVar) {
                    $scope.multiCollapseVar = 0;
                }
                else {
                    $scope.multiCollapseVar = y;
                }
            };
        }
    };
});

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('timeline', function (SBADMIN2_ROOT) {
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
