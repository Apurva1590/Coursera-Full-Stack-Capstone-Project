'use strict';


angular.module('myApp', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/views/home.html'
        });

        $routeProvider.otherwise({ redirectTo: '/home' });

    }]);
