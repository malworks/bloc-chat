(function() {
    function ModalCtrl($scope, $uibModal) {

        this.open = function(){
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalDialog',
                size: 'sm', 
                backdrop: 'static'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();