angular.module('sbadmin2', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
angular.module('sbadmin2').filter('unsafe', function($sce) { return $sce.trustAsHtml; });
angular.module('sbadmin2').filter('fromNow', function() {
    return function(dateString) {
        return moment(dateString).fromNow();
    };
});
angular.module('sbadmin2').config(function($stateProvider) {

    /* Add New States Above */

});

