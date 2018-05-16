angular.module('Projet_Web', [])
        .controller('CtrlConnect', ['$scope', '$http',
            function ($scope, $http) {
                $scope.erreur = "";
                $scope.ident = {};
                $scope.ident.mail = "";
                $scope.ident.mdp = "";
                
                $scope.connect = function() {

                	if (($scope.mail === "" || $scope.mail === null || $scope.mail === undefined) && ($scope.mdp === "" || $scope.mdp === null || $scope.mdp === undefined)) {
                		$scope.erreur = "Veuillez entrer votre adresse mail et le mot de passe associé";
                		return;
                	}
                	if ($scope.mail === "" || $scope.mail === null || $scope.mail === undefined) {
                		$scope.erreur = "Veuillez entrer votre adresse mail";
                		return;
                	}
                	if ($scope.mdp === "" || $scope.mdp === null || $scope.mdp === undefined) {
                		$scope.erreur = "Veuillez entrer votre mot de passe";
                		return;
                	}
                	$scope.ident.mail = $scope.mail;
                	$scope.ident.mdp = $scope.mdp;
					return $http.post('/isparticipants', $scope.ident , undefined).then(function(response) {
						if (response.data === 'non') {
							$scope.erreur = "Identifiants incorrects";
						}
						if (response.data === 'normal') {
							document.location.href="accueilParticipant.html";
						}
						if (response.data === 'admin') {
							document.location.href="accueilAdmin.html";
						}
					});
                };
                
                $scope.continue = function() {
                	document.location.href="accueilParticipant.html";
                };
                
            }]);

