angular.module('almReportWeb', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'sbadmin2']);

angular.module('almReportWeb').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('root', {
        templateUrl: 'view/layout.html'
    });

    $stateProvider.state('root.dashboard', {
        url: '/dashboard',
        templateUrl: 'partial/dashboard/dashboard.html'
    });

    $stateProvider.state('root.about', {
        url: '/about',
        templateUrl: 'partial/about/about.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');

});

angular.module('almReportWeb').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

angular.module('almReportWeb').controller('HeaderCtrl',function($scope){
    $scope.title = 'Title';
    $scope.sidebar = {
        menuItemList: [{
            sref: 'root.dashboard',
            ico: 'fa-dashboard',
            name: 'Dashboard Type'
        }, {
            sref: 'root.chart',
            ico: 'fa-bar-chart-o',
            name: 'Chart Type'
        }, {
            sref: 'root.table',
            ico: 'fa-table',
            name: 'Table Type'
        }, {
            sref: 'root.form',
            ico: 'fa-edit',
            name: 'Form Type'
        }, {
            ico: 'fa-wrench',
            name: 'UI Elements',
            subMenuItemList: [{
                sref: 'root.panels-wells',
                name: 'Panels and Wells'
            }, {
                sref: 'root.buttons',
                name: 'Buttons'
            }, {
                sref: 'root.notifications',
                name: 'Notifications'
            }, {
                sref: 'root.typography',
                name: 'Typography'
            }, {
                sref: 'root.icons',
                name: 'Icons'
            }, {
                sref: 'root.grid',
                name: 'Grid'
            }]
        }, {
            ico: 'fa-files-o',
            name: 'Sample Pages',
            subMenuItemList: [{
                sref: 'root.blank',
                name: 'Blank Page'
            }, {
                sref: 'login',
                name: 'Login Page'
            }]
        }]
    };
    $scope.menuItemList = [{

    }, {

    }];
});