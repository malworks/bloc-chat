 (function() {
    function config($stateProvider, $locationProvider) {
    	$locationProvider
        	.html5Mode({
            	enabled: true,
            	requireBase: false
         });

        $stateProvider
        	.state('leftbar', {
            	url: '/',
            	controller: 'RoomCtrl as room',
            	templateUrl: '/templates/leftbar.html'
         	})

    }
 
    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
        .config(config);
 })();