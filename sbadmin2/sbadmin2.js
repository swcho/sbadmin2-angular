
(function() {
    var sbadmin2 = angular.module('sbadmin2', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);
    sbadmin2.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
    sbadmin2.filter('fromNow', function() {
        return function(dateString) {
            return moment(dateString).fromNow();
        };
    });

    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length-1].src.replace('sbadmin2.js', '');

    console.log('sbadmin2 loaded from: ' + currentScriptPath);

    sbadmin2.constant('SBADMIN2_ROOT', currentScriptPath);

    sbadmin2.config(function($stateProvider) {

        /* Add New States Above */

    });

}());
