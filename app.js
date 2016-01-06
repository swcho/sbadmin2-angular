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
