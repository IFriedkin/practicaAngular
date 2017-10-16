/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('myApp', [])
        .controller('controlador', ['$scope',
            function ($scope) {
                $scope.opcio1 = 1;
                $scope.opcio2 = "valor1";
                $scope.opcio3 = "valor1";
                $scope.clicaOpcio = function () {
                    $scope.opcio1+=1;
                    if($scope.opcio1>4){$scope.opcio1=1;}
                }
            }]);