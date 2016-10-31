(function() {
	function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uiModal.open({
        	templateUrl: '/templates/modal_user.html',
            controller: 'ModalUserCtrl',
            size: 'md', 
            backdrop: 'static'
        });
    };
  	};


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();