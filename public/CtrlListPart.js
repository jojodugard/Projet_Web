angular.module('Projet_Web', [])
		.config(function($locationProvider) {
        	$locationProvider.html5Mode(true);
    	})
        .controller('CtrlListPart', ['$scope', '$http', '$location',
            function ($scope, $http, $location) {
            
                $scope.id = $location.search();

                $scope.getEvent = function() {
                	return $http.post('/getevenement', $scope.id , undefined).then(function(response) {
						$scope.evt = response.data[0];
					});
                }
                
                $scope.getParticipants = function() {
                	return $http.post('/getparticipantsevenement', $scope.id , undefined).then(function(response) {
						$scope.participants = response.data;
					});
                }

				$scope.getParticipants();
				$scope.getEvent();
                
                
            }]);

