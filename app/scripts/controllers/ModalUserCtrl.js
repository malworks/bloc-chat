(function() {
    function ModalUserCtrl($cookies, $uibModalInstance, $scope) {
        this.createUser = function(name) {
        this.currentUser = name;
        };
    }


    angular
        .module('blocChat')
        .controller('ModalUserCtrl', ['$cookies', '$uibModalInstance', '$scope', ModalUserCtrl]);
})(); 