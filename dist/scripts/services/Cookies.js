(function() {
	function BlocChatCookies($cookies, $uibModal) {

        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
            	templateUrl: '/templates/modal_user.html',
                controller: 'ModalUserCtrl',
                controllerAs: 'modalUser',
                size: 'md', 
                backdrop: 'static'
            });
        };

  	};


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();