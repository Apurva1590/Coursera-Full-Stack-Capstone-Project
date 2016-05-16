'use strict';

angular.module('myApp')
    
    // Phone controller to do mock phone calls since the app isn't connect to a real phone service
    .controller('phoneController', ['$scope', function ($scope) {

        $scope.phoneBtn = function (button) {
            var btn = button;
            var currentText = $('#phoneDisplay').text();
            $('#phoneDisplay').text(currentText + btn);
        };

        $scope.phoneClear = function () {
            $('#phoneDisplay').text("");
        }

        $scope.phoneCall = function () {
            var numToCall = $('#phoneDisplay').text();
            console.log("calling " + numToCall);
            $('#phoneDisplay').html(
                "<h4>Calling: </h4>" +
                numToCall
            );

            setTimeout(function () {
                $('#phoneDisplay').html("<h4>In Call with: </h4>" + numToCall);
            }, 2000);
        }

        $scope.phoneEnd = function () {
            $('#phoneDisplay').text("Call Ended");
            console.log("call ended");

            setTimeout(function () {
                $('#phoneDisplay').html("");
            }, 2000);
        }

        $scope.phoneHold = function () {
            var heldText = $('#phoneDisplay').html();
            $('#phoneDisplay').text("Call Held");

            setTimeout(function () {
                $('#phoneDisplay').html("");

                setTimeout(function () {
                    $('#phoneDisplay').html(heldText);
                }, 1500);
            }, 2000);


        };

    }]);