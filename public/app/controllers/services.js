"use strict";

angular.module('myApp')

    .constant("baseURL", "http://sisson-capstone-loopb.mybluemix.net/api/")

    .service('contactService', ['baseURL', '$http', '$resource', function (baseURL, $http, $resource) {

        this.getContacts = function () {
            return $resource(baseURL + "sisson-contacts", null, { 'update': { method: 'PUT' } });
        };

        this.addContact = function (formObjData) {
            $http({
                method: "POST",
                url: baseURL + "sisson-contacts",
                data: angular.toJson(formObjData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            document.location.reload();
        };

    }]);