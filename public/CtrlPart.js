angular.module('Projet_Web', [])
        .controller('CtrlPart', ['$scope', '$http',
            function ($scope, $http) {
                $scope.erreur = "";
                
                $scope.getEvents = function() {
					return $http.post('/getevenementspourpart', undefined, undefined).then(function(response) {
						$scope.events = response.data;
					});
                };
                
                $scope.getNBEvents = function() {
					return $http.post('/getnbevenements', undefined, undefined).then(function(response) {
						$scope.data = response.data;
						$scope.nbEvents = $scope.data[0]["nbEvents"];
					});
                };

				$scope.getEvents();
                $scope.getNBEvents();
                
            }]);

