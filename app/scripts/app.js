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
            	controller: 'RoomCtrl as RoomCtrl',
            	templateUrl: '/templates/leftbar.html'
         	});

    }
 
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
 })();