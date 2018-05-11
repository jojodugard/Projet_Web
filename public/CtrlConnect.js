angular.module('Projet_Web', [])
        .controller('CtrlConnect', ['$scope',
            function ($scope) {
                $scope.erreur = "";
                
                $scope.connect = function() {
                	console.log("Je tourne");
                	if (($scope.mail === "" || $scope.mail === null || $scope.mail === undefined) && ($scope.mdp === "" || $scope.mdp === null || $scope.mdp === undefined)) {
                		$scope.erreur = "Veuillez entrer votre adresse mail et le mot de passe associé";
                		console.log("je passe là");
                		return;
                	}
                	if ($scope.mail === "" || $scope.mail === null || $scope.mail === undefined) {
                		$scope.erreur = "Veuillez entrer votre adresse mail";
                		return;
                	}
                	if ($scope.mdp === "" || $scope.mdp === null || $scope.mdp === undefined) {
                		$scope.erreur = "Veuillez entrer le mot de passe associé à l'adresse mail";
                		return;
                	}
                	console.log($scope.erreur);
                };
                
            }]);

