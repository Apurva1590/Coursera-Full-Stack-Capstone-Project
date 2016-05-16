'use strict';

angular.module('myApp')

    .controller('contactController', ['$scope', 'contactService', function ($scope, contactService) {

        $scope.contacts = {};

        //Get contacts from IBM Bluemix hosted Loopback API - Calls ContactService
        contactService.getContacts().query(

            function (response) {
                $scope.contacts = response;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
        
        // Add contact function calls Contact Service
        $scope.addContact = function () {
            
            console.log($scope.addCont);

            contactService.addContact($scope.addCont);
           
        };


        // Displays contact information in the "details" area of the view
        $scope.showDetails = function (first, last, phone, email) {
            $('#contactDetails').show();
            $('#contactDetails').html(
                '<h3>Contact Details</h3>' +
                '<h4>' + first + ' ' + last + '</h4>' +
                '<h5><i class="glyphicon glyphicon-phone-alt"></i> Phone: ' + phone + '</h5>' +
                '<h5><i class="glyphicon glyphicon-envelope"></i> Email: ' + email + '</h5>'
            );
        };

        // Click to call function from contact list
        $scope.clickToCall = function (phone) {

            console.log("calling " + phone);
            $('#phoneDisplay').html(
                "<h4>Calling: </h4>" + phone
            );

            setTimeout(function () {
                $('#phoneDisplay').html("<h4>In Call with: </h4>" + phone);
            }, 2000);

        }

    }]);