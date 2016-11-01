(function() {
    function ModalUserCtrl($cookies, $uibModalInstance, $scope, CurrentUser) {
        this.createUser = function(name) {
        	$cookies.put("blocChatCurrentUser", name);

        	CurrentUser.setCurrentUser(name)
        	$uibModalInstance.close(); 
        	console.log("Howdy!");
        };
    }


    angular
        .module('blocChat')
        .controller('ModalUserCtrl', ['$cookies', '$uibModalInstance', '$scope', 'CurrentUser', ModalUserCtrl]);
})(); 