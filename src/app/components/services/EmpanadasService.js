(function () {
    'use strict';

    angular.module('app')
        .service('empanadasService', [
            '$q', '$http',
            empanadasService
        ]);
    function empanadasService($q, $http) {
        var pedidoData = {
            status: "in progress",
            items: [
                {
                    name: "JyQ",
                    quantity: 2
                }
            ]
        };


        return {
            loadPedido: function (_success) {

                $http({
                    method: 'GET',
                    url: 'http://74.207.253.57:3010/empanadas/status'
                }).then(function successCallback(response) {
                    return _success(response.data.status);
                }, function errorCallback(response) {
                    console.log('Fail');
                });
            }
        };
    }
})();
