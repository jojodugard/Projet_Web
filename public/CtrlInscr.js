angular.module('Projet_Web', [])
		.config(function($locationProvider) {
        	$locationProvider.html5Mode(true);
    	})
        .controller('CtrlInscr', ['$scope', '$http', '$location',
            function ($scope, $http, $location) {
            	
            	$scope.toInscr = {};
            	$scope.toInscr.mdp = "";
            	$scope.toInscr.ref = "";
            	$scope.toInscr.statut="";
            	
            	
                $scope.id = $location.search();
                
                $scope.inscrip = {};
            	$scope.inscrip.idE = $scope.id.id;
            	$scope.inscrip.idP = "";
            	
                $scope.getEvent = function() {
                	return $http.post('/getevenement', $scope.id , undefined).then(function(response) {
						$scope.evt = response.data[0];
					});
                }

				$scope.getAccompagnateurs = function() {
					return $http.post('/getaccompagnateurs', $scope.id , undefined).then(function(response) {
						$scope.accompagnateurs = response.data;
					});
				}
				
				$scope.showAccBy = function() {
					if ($scope.toInscr.statut === 'Accompagnant') {
						return true;
					}
					return false;
				}
				
				// $scope.participantexist = function() {
// 					return $http.post('/participantexist', $scope.toInscr , undefined).then(function(response) {
// 						$scope.exist = response.data[0]["nb"];
// 						console.log($scope.exist);
// 					});
// 				}
// 				
// 				$scope.creerParticipant = function() {
// 					if ($scope.exist == 0) {
// 						return $http.post('/ajouterParticipant', $scope.toInscr , undefined).then(function(response) {
// 							console.log(response.data);
// 						});
// 					}
// 				}		
// 				
// 				$scope.getParticipantId = function() {
// 					return $http.post('/selectP', $scope.toInscr , undefined).then(function(response) {
// 						console.log(response.data);
// 						$scope.inscrip.idP = response.data[0]["idP"];
// 						console.log($scope.inscrip);
// 					});
// 				}
// 						
// 				$scope.inscrire = function() {
// 					return $http.post('/inscrire', $scope.inscrip , undefined).then(function(response) {
//  							console.log(response.data);
// 					});
// 					
// 				}
				
				$scope.doInscription = function() {
					return $http.post('/participantexist', $scope.toInscr , undefined).then(function(response) {
						$scope.exist = response.data[0]["nb"];
						console.log($scope.exist);
					}).then(function() {
					if ($scope.exist === 0) {
						return $http.post('/ajouterParticipant', $scope.toInscr , undefined).then(function(rep) {
							console.log(rep.data);
						});
					}
					}).then(function() {
					return $http.post('/selectP', $scope.toInscr , undefined).then(function(rp) {
						console.log(rp.data);
						$scope.inscrip.idP = rp.data[0]["idP"];
						console.log($scope.inscrip);
					});
					}).then(function() {
					return $http.post('/inscrire', $scope.inscrip , undefined).then(function(r) {
 							console.log(r.data);
 							document.location.href="accueilParticipant.html";
					});
					});
				}
				
				
				$scope.getAccompagnateurs();
				$scope.getEvent();
                
                
            }]);

