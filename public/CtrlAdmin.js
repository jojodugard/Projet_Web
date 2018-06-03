angular.module('Projet_Web', [])
        .controller('CtrlAdmin', ['$scope', '$http',
            function ($scope, $http) {
                $scope.erreur = "";
                
                $scope.getEvents = function() {
					return $http.post('/getevenements', undefined, undefined).then(function(response) {
						$scope.events = response.data;
					});
                };
                
                $scope.getNBEvents = function() {
					return $http.post('/getnbevenements', undefined, undefined).then(function(response) {
						$scope.data = response.data;
						$scope.nbEvents = $scope.data[0]["nbEvents"];
					});
                };
                
                $scope.delete = function(evt) {
                	console.log(evt.idE);
                	console.log(evt);
                	return $http.post('/deleteevenement', evt, undefined).then(function(response) {
						if (response.data === "OK") {
							$scope.erreur = "Suppression réalisée";
							$scope.getEvents();
                			$scope.getNBEvents();
						}
						else {
							$scope.erreur = "Suppression annulée : erreur imprévue";
						}
					});
                };

                $scope.getNbParts = function() {
					return $http.post('/getnbparticipantstot', undefined, undefined).then(function(response) {
						$scope.data = response.data;
						$scope.nbPartTot = $scope.data[0]["nbPartTot"];
						$scope.moyPart = $scope.nbPartTot / $scope.nbEvents ;
					});
                };
                

				$scope.getEvents();
                $scope.getNBEvents();
                $scope.getNbParts();
                
            }]);

