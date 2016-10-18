(function() {
    function ModalCtrl($scope, $uibModal) {

        this.open = function(){
        	console.log("Open Modal");
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalDialog',
                size: 'md', 
                backdrop: 'static'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();