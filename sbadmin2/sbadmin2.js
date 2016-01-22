
(function() {
    var sbadmin2 = angular.module('SBAdmin2', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
    sbadmin2.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
    sbadmin2.filter('fromNow', function() {
        return function(dateString) {
            return moment(dateString).fromNow();
        };
    });

    //var scripts = document.getElementsByTagName("script");
    //var currentScriptPath = scripts[scripts.length-1].src.replace('sbadmin2.js', '');
    //console.info('SBAdmin2 loaded from: ' + currentScriptPath);
    //sbadmin2.constant('SBADMIN2_ROOT', currentScriptPath);

    sbadmin2.config(function($stateProvider) {

        /* Add New States Above */

    });

}());

angular.module('SBAdmin2').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('sbadmin2/directive/chat/chat.html',
    "<div class=\"chat-panel panel panel-default\"><div class=panel-heading><i class=\"fa fa-comments fa-fw\"></i> {{title}}<div class=\"btn-group pull-right\"><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-chevron-down\"></i></button><ul class=\"dropdown-menu slidedown\"><li><a href=#><i class=\"fa fa-refresh fa-fw\"></i> Refresh</a></li><li><a href=#><i class=\"fa fa-check-circle fa-fw\"></i> Available</a></li><li><a href=#><i class=\"fa fa-times fa-fw\"></i> Busy</a></li><li><a href=#><i class=\"fa fa-clock-o fa-fw\"></i> Away</a></li><li class=divider></li><li><a href=#><i class=\"fa fa-sign-out fa-fw\"></i> Sign Out</a></li></ul></div></div><div class=panel-body><ul class=chat><li class=\"left clearfix\"><span class=\"chat-img pull-left\"><img src=http://placehold.it/50/55C1E7/fff alt=\"User Avatar\" class=img-circle></span><div class=\"chat-body clearfix\"><div class=header><strong class=primary-font>Jack Sparrow</strong> <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago</small></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p></div></li><li class=\"right clearfix\"><span class=\"chat-img pull-right\"><img src=http://placehold.it/50/FA6F57/fff alt=\"User Avatar\" class=img-circle></span><div class=\"chat-body clearfix\"><div class=header><small class=text-muted><i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago</small> <strong class=\"pull-right primary-font\">Bhaumik Patel</strong></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p></div></li><li class=\"left clearfix\"><span class=\"chat-img pull-left\"><img src=http://placehold.it/50/55C1E7/fff alt=\"User Avatar\" class=img-circle></span><div class=\"chat-body clearfix\"><div class=header><strong class=primary-font>Jack Sparrow</strong> <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago</small></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p></div></li><li class=\"right clearfix\"><span class=\"chat-img pull-right\"><img src=http://placehold.it/50/FA6F57/fff alt=\"User Avatar\" class=img-circle></span><div class=\"chat-body clearfix\"><div class=header><small class=text-muted><i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago</small> <strong class=\"pull-right primary-font\">Bhaumik Patel</strong></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.</p></div></li></ul></div><div class=panel-footer><div class=input-group><input id=btn-input type=text class=\"form-control input-sm\" placeholder=\"Type your message here...\"> <span class=input-group-btn><button class=\"btn btn-warning btn-sm\" id=btn-chat>Send</button></span></div></div></div>"
  );


  $templateCache.put('sbadmin2/directive/dashboard/stats/stats.html',
    "<div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-{{colour}}\"><div class=panel-heading><div class=row><div class=col-xs-3><i class=\"fa fa-{{type}} fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=huge>{{number}}</div><div>{{comments}}</div></div></div></div><a ui-sref={{goto}}><div class=panel-footer><span class=pull-left>View Details</span> <span class=pull-right><i class=\"fa fa-arrow-circle-right\"></i></span><div class=clearfix></div></div></a></div></div>"
  );


  $templateCache.put('sbadmin2/directive/diff/diff.html',
    "<span><i ng-if=\"diffValue > 0\" class=\"fa fa-arrow-circle-up diff-inc\">{{diffValue}}</i> <i ng-if=\"diffValue == 0\" class=\"fa fa-minus diff-same\"></i> <i ng-if=\"diffValue < 0\" class=\"fa fa-arrow-circle-down diff-dec\">{{diffValue}}</i></span>"
  );


  $templateCache.put('sbadmin2/directive/header/header-notification/header-notification.html',
    "<ul class=\"nav navbar-top-links navbar-right\"><li class=dropdown ng-repeat=\"notification in notifications\" ng-switch=notification.type><a class=dropdown-toggle data-toggle=dropdown ng-switch-when=message><i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-messages\" ng-switch-when=message><li ng-repeat-start=\"message in notification.messages\"><a href={{message.href}}><div><strong>{{message.from}}</strong> <span class=\"pull-right text-muted\"><em>{{message.date | fromNow}}</em></span></div><div>{{message.body}}</div></a></li><li class=divider ng-repeat-end></li><li><a class=text-center href=#><strong>Read All Messages</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul><a class=dropdown-toggle data-toggle=dropdown ng-switch-when=progress><i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-tasks\" ng-switch-when=progress><li ng-repeat-start=\"progress in notification.progresses\"><a href=#><div><p><strong>{{progress.name}}</strong> <span class=\"pull-right text-muted\">{{progress.progress}}% Complete</span></p><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-{{progress.type}}\" role=progressbar aria-valuenow={{progress.progress}} aria-valuemin=0 aria-valuemax=100 style=\"width: {{progress.progress}}%\"><span class=sr-only>{{progress.progress}}% Complete (success)</span></div></div></div></a></li><li class=divider ng-repeat-end></li><li><a class=text-center href=#><strong>See All Tasks</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul><a class=dropdown-toggle data-toggle=dropdown ng-switch-when=alarm><i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-alerts\" ng-switch-when=alarm><li ng-repeat-start=\"alarm in notification.alarms\"><a href=#><div><i class=\"fa fa-fw\" ng-class=alarm.ico></i> {{alarm.title}} <span class=\"pull-right text-muted small\">{{alarm.date | fromNow}}</span></div></a></li><li class=divider ng-repeat-end></li><li><a class=text-center href=#><strong>See All Alerts</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul><a class=dropdown-toggle data-toggle=dropdown ng-switch-when=user><i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-user\" ng-switch-when=user><li><a href=#><i class=\"fa fa-user fa-fw\"></i> User Profile</a></li><li><a href=#><i class=\"fa fa-gear fa-fw\"></i> Settings</a></li><li><a href=\"http://www.strapui.com/\"><i class=\"fa fa-eye fa-fw\"></i> Premium Angular Themes</a></li><li class=divider></li><li><a ui-sref=login><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></li></ul>"
  );


  $templateCache.put('sbadmin2/directive/header/header.html',
    "<nav class=\"navbar navbar-default navbar-static-top\" role=navigation style=\"margin-bottom: 0\"><div class=navbar-header><a class=navbar-brand href=#>{{title}}</a> <button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><header-notification notifications=notifications></header-notification><sidebar data=sidebar></sidebar></nav>"
  );


  $templateCache.put('sbadmin2/directive/notifications/notifications.html',
    "<div class=panel-body><div class=list-group><a ng-repeat=\"item in items\" class=list-group-item ui-sref=item.sref><i class=\"fa fa-fw\" ng-class=item.ico></i> {{item.title}} <span class=\"pull-right text-muted small\"><em>{{item.date | fromNow}}</em></span></a></div></div>"
  );


  $templateCache.put('sbadmin2/directive/panel/panel.html',
    "<div class=\"panel panel-default\"><div class=panel-heading><i class=\"fa fa-fw\" ng-class=ico></i> {{title}}<div ng-if=menuItems class=\"btn-group pull-right\"><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-chevron-down\"></i></button><ul class=\"dropdown-menu slidedown\"><li ng-repeat=\"item in menuItems\"><a href=#><i class=\"fa fa-fw\" ng-class=item.ico></i> {{item.title}}</a></li></ul></div></div><div ng-transclude></div></div>"
  );


  $templateCache.put('sbadmin2/directive/sidebar/sidebar-search/sidebar-search.html',
    "<li class=sidebar-search><div class=\"input-group custom-search-form\"><input type=text class=form-control placeholder=Search...> <span class=input-group-btn><button class=\"btn btn-default\" type=button><i class=\"fa fa-search\"></i></button></span></div></li>"
  );


  $templateCache.put('sbadmin2/directive/sidebar/sidebar.html',
    "<div class=\"navbar-default sidebar\" role=navigation><div class=\"sidebar-nav navbar-collapse\"><ul class=\"nav in\" id=side-menu><sidebar-search ng-if=data.search></sidebar-search><li ng-repeat=\"menuItem in data.menuItemList\" ui-sref-active=active><a ng-if=!menuItem.subMenuItemList ng-href={{menuItem.href}} ng-click=check($index)><i class=\"fa fa-fw\" ng-class=menuItem.ico></i> {{menuItem.name}}</a> <a ng-if=menuItem.subMenuItemList ng-click=check($index)><i class=\"fa fa-fw\" ng-class=menuItem.ico></i> {{menuItem.name}} <span class=\"fa arrow\"></span></a><ul class=\"nav nav-second-level\" collapse=\"collapseVar!=$index\"><li ng-repeat=\"subMenuItem in menuItem.subMenuItemList\" ui-sref-active=active><a ng-href={{subMenuItem.href}}>{{subMenuItem.name}}</a></li></ul></li></ul></div></div>"
  );


  $templateCache.put('sbadmin2/directive/timeline/timeline.html',
    "<div class=panel-body><ul class=timeline><li ng-repeat=\"item in items\" ng-class=\"item.inverted ? 'timeline-inverted': ''\"><div ng-if=item.badge class=timeline-badge ng-class=item.badge.clas><i class=fa ng-class=item.badge.ico></i></div><div class=timeline-panel><div class=timeline-heading><h4 class=timeline-title>{{item.title}}</h4><p ng-if=item.dateAnnotation><small class=text-muted><i class=\"fa fa-clock-o\"></i> {{item.dateAnnotation.date | fromNow}} {{item.dateAnnotation.description}}</small></p></div><div class=timeline-body ng-bind-html=\"item.body | unsafe\"></div><hr ng-if=item.menuItems><div ng-if=item.menuItems class=btn-group><button type=button class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-gear\"></i> <span class=caret></span></button><ul class=dropdown-menu role=menu><li ng-repeat=\"menuItem in item.menuItems\" ng-class=\"menuItem.divider ? 'divider': ''\"><a ng-if=menuItem.title ui-sref=menuItem.sref>{{menuItem.title}}</a></li></ul></div></div></li></ul></div>"
  );

}]);

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

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('stats', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/dashboard/stats/stats.html',
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

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('SBAdmin2').directive('headerNotification', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/header/header-notification/header-notification.html',
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
angular.module('SBAdmin2').directive('header', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/header/header.html',
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
angular.module('SBAdmin2').directive('notifications', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/notifications/notifications.html',
        restrict: 'E',
        replace: true,
        scope: {
            items: '='
        }
    };
});


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

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('SBAdmin2').directive('sidebarSearch', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/sidebar/sidebar-search/sidebar-search.html',
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

angular.module('SBAdmin2').directive('sidebar', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/sidebar/sidebar.html',
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
angular.module('SBAdmin2').directive('timeline', function () {
    'use strict';
    return {
        templateUrl: 'sbadmin2/directive/timeline/timeline.html',
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
