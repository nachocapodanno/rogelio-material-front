(function () {
    'use strict';

    angular.module('app')
        .service('empanadasService', [
            '$q', '$http',
            empanadasService
        ]);
    function empanadasService($q, $http) {
        //var srvBase = "http://127.0.0.1:3010";
        var srvBase = "http://74.207.253.57:3010";

        var statusUrl = srvBase + '/empanadas/status';
        var abrirPedidoUrl = srvBase + '/empanadas/';
        var agregarPedidoUrl = srvBase + '/empanadas/a';
        var cerrarPedidoUrl = srvBase + '/empanadas/c';

        var pedidoData = {
            status: "closed",
            items: []
        };


        return {
            loadPedido: function (_success) {

                $http({
                    method: 'GET',
                    url: statusUrl,
                }).then(function successCallback(response) {
                    return _success(response.data);
                }, function errorCallback(response) {
                    console.log('Fail');
                });
            },
            abrirPedido: function (_success) {

                $http({
                    method: 'POST',
                    url: abrirPedidoUrl,
                }).then(function successCallback(response) {
                    return _success(response.data);
                }, function errorCallback(response) {
                    console.log('Fail');
                });
            },
            cerrarPedido: function (_success) {

                $http({
                    method: 'POST',
                    url: cerrarPedidoUrl,
                }).then(function successCallback(response) {
                    return _success(response.data);
                }, function errorCallback(response) {
                    console.log('Fail');
                });
            },
            pedirDo: function (tipo, _success) {

                var req = {
                    method: 'POST',
                    url: agregarPedidoUrl,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {tipo: tipo}
                };

                $http(req).then(function successCallback(response) {
                    return _success(response.data);
                }, function errorCallback(response) {
                    console.log('Fail');
                });

            }
        };
    }
})();
