(function () {
    'use strict';

    angular.module('app')
            .service('navService', [
                '$q',
                navService
            ]);

    function navService($q) {
        var menuItems = [
            {
                name: 'Open Office',
                icon: 'desktop_mac',
                sref: '.office'
            },
            {
                name: 'Empanadas',
                icon: 'local_pizza',
                sref: '.empanadas'
            },
        ];

        return {
            loadAllItems: function () {
                return $q.when(menuItems);
            }
        };
    }

})();
