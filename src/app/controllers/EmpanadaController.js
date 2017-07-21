(function () {

    angular
        .module('app')
        .controller('EmpanadaController', [
            'empanadasService',
            EmpanadaController
        ]);

    function EmpanadaController(empanadasService) {
        var vm = this;

        vm.pedido = {
            status: 'ready'
        };

        empanadasService
            .loadPedido(function (pedidoData) {
                vm.pedido = pedidoData;

            });
    }

})();
