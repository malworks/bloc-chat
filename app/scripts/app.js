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

            // .state('modal', {
            //         url: '/modal',
            //         controller: 'ModalCtrl as modal',
            //         templateUrl: '/templates/modal.html'
            // });

    }
 
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
 })();