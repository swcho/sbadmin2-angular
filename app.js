// angular.module('almReportWeb', ['oc.lazyLoad', 'ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'SBAdmin2']);
angular.module('almReportWeb', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'SBAdmin2']);

angular.module('almReportWeb').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('root', {
        templateUrl: 'view/layout.html'
    });

    $stateProvider.state('root.dashboard', {
        url: '/dashboard',
        templateUrl: 'partial/dashboard/dashboard.html'
    });

    $stateProvider.state('root.chart', {
        url: '/chart',
        templateUrl: 'partial/chart/chart.html',
        controller: 'ChartCtrl',
        resolve: {
            loadMyFile:function($ocLazyLoad) {
                return $ocLazyLoad.load([
                        'bower_components/Chart.js/Chart.js',
                        'bower_components/angular-chart.js/dist/angular-chart.min.js',
                        'bower_components/angular-chart.js/dist/angular-chart.css',
                        'partial/chart/chart.js'
                    ]);
            }
        }
    });

    $stateProvider.state('root.table', {
        url: '/table',
        templateUrl: 'partial/table/table.html'
    });

    $stateProvider.state('root.form', {
        url: '/form',
        templateUrl: 'partial/form/form.html'
    });

    $stateProvider.state('root.panels-wells', {
        url: '/panels-wells',
        templateUrl: 'partial/panels-wells/panels-wells.html'
    });

    $stateProvider.state('root.buttons', {
        url: '/buttons',
        templateUrl: 'partial/buttons/buttons.html'
    });

    $stateProvider.state('root.notifications', {
        url: '/notifications',
        templateUrl: 'partial/notifications/notifications.html'
    });

    $stateProvider.state('root.typography', {
        url: '/typography',
        templateUrl: 'partial/typography/typography.html'
    });

    $stateProvider.state('root.icons', {
        url: '/icons',
        templateUrl: 'partial/icons/icons.html'
    });

    $stateProvider.state('root.grid', {
        url: '/grid',
        templateUrl: 'partial/grid/grid.html'
    });

    $stateProvider.state('root.blank', {
        url: '/blank',
        templateUrl: 'partial/blank/blank.html'
    });

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html'
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
        search: {

        },
        menuItemList: [{
            href: '#/dashboard',
            ico: 'fa-dashboard',
            name: 'Dashboard Type'
        }, {
            href: '#/chart',
            ico: 'fa-bar-chart-o',
            name: 'Chart Type'
        }, {
            href: '#/table',
            ico: 'fa-table',
            name: 'Table Type'
        }, {
            href: '#/form',
            ico: 'fa-edit',
            name: 'Form Type'
        }, {
            ico: 'fa-wrench',
            name: 'UI Elements',
            subMenuItemList: [{
                href: '#/panels-wells',
                name: 'Panels and Wells'
            }, {
                href: '#/buttons',
                name: 'Buttons'
            }, {
                href: '#/notifications',
                name: 'Notifications'
            }, {
                href: '#/typography',
                name: 'Typography'
            }, {
                href: '#/icons',
                name: 'Icons'
            }, {
                href: '#/grid',
                name: 'Grid'
            }]
        }, {
            ico: 'fa-files-o',
            name: 'Sample Pages',
            subMenuItemList: [{
                href: '#/blank',
                name: 'Blank Page'
            }, {
                href: '#/login',
                name: 'Login Page'
            }]
        }]
    };
    $scope.notifications = [{
        type: 'message',
        messages: [{
            from: 'John Smith',
            href: '',
            date: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
        }, {
            from: 'John Smith',
            href: '',
            date: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
        }, {
            from: 'John Smith',
            href: '',
            date: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...'
        }]
    }, {
        type: 'progress',
        progresses: [{
            name: 'Task 1',
            type: 'success',
            progress: 40
        }, {
            name: 'Task 2',
            type: 'info',
            progress: 20
        }, {
            name: 'Task 3',
            type: 'warning',
            progress: 60
        }, {
            name: 'Task 4',
            type: 'danger',
            progress: 80
        }]
    },  {
        type: 'alarm',
        alarms: [{
            ico: 'fa-comment',
            title: 'New Comment',
            date: new Date()
        }, {
            ico: 'fa-twitter',
            title: '3 New Followers',
            date: new Date()
        }, {
            ico: 'fa-envelope',
            title: 'Message Sent',
            date: new Date()
        }, {
            ico: 'fa-tasks',
            title: 'New Task',
            date: new Date()
        }, {
            ico: 'fa-upload',
            title: 'Server Rebooted',
            date: new Date()
        }]
    }, {
        type: 'user'
    }];

});