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
            status: 'closed'
        };

        vm.abrirPedido = function () {
            empanadasService
                .abrirPedido(function (pedidoData) {
                    vm.pedido = pedidoData;

                });
        };

        vm.cerrarPedido = function () {
            empanadasService
                .cerrarPedido(function (pedidoData) {
                    vm.pedido = pedidoData;

                });
        };
        vm.pedir = function (tipo) {
            empanadasService
                .pedirDo(tipo, function (pedidoData) {
                    vm.pedido = pedidoData;
                });
        };


        empanadasService
            .loadPedido(function (pedidoData) {
                vm.pedido = pedidoData;

            });
    }

})();
