angular.module('Projet_Web', [])
        .controller('CtrlCreateEvt', ['$scope', '$http',
            function ($scope, $http) {
                $scope.erreur = "";
                $scope.evt = {};
                $scope.evt.isEtu = false;
                $scope.evt.isDip = false;
                $scope.evt.isPro = false;
                $scope.evt.isEns = false;
                $scope.evt.isAdmin = false;
                $scope.evt.isAcc = false;
                $scope.evt.nbEtu = 0;
                $scope.evt.nbDip = 0;
                $scope.evt.nbPro = 0;
                $scope.evt.nbEns = 0;
                $scope.evt.nbAdmin = 0;
                
          
                $scope.createEvt = function() {
					
					if ($scope.evt.acro === null || $scope.evt.acro === "" || $scope.evt.acro === undefined || $scope.evt.nameEvt === null || $scope.evt.nameEvt === "" || $scope.evt.nameEvt === undefined || $scope.evt.DateEvt === null || $scope.evt.DateEvt === "" || $scope.evt.DateEvt === undefined || $scope.evt.lieuEvt === null || $scope.evt.lieuEvt === "" || $scope.evt.lieuEvt === undefined || $scope.evt.DescEvt === null || $scope.evt.DescEvt === "" || $scope.evt.DescEvt === undefined || $scope.evt.DateOuv === null || $scope.evt.DateOuv === "" || $scope.evt.DateOuv === undefined || $scope.evt.DateClo === null || $scope.evt.DateClo === "" || $scope.evt.DateClo === undefined || $scope.evt.nbMax === null || $scope.evt.nbMax === "" || $scope.evt.nbMax === undefined) {
						$scope.erreur = "Les champs suivants sont obligatoires : acronyme, nom, lieu, date, description, date d'ouverture, date de clôture et nombre maximal";
						return;
					}
					if ($scope.evt.isEtu === true) {
						$scope.evt.isEtu = 1;
					}
					if ($scope.evt.isDip === true) {
						$scope.evt.isDip = 1;
					}
					if ($scope.evt.isPro === true) {
						$scope.evt.isPro = 1;
					}
					if ($scope.evt.isEns === true) {
						$scope.evt.isEns = 1;
					}
					if ($scope.evt.isAdmin === true) {
						$scope.evt.isAdmin = 1;
					}
					if ($scope.evt.isAcc === true) {
						$scope.evt.isAcc = 1;
					}
					return $http.post('/evenements', $scope.evt , undefined).then(function(response) {
						if (response.data === 'Succes') {
							document.location.href="accueilAdmin.html";
						}
						else {
							$scope.erreur = "Erreur rencontrée : évènement non créé";
						}
					});
                };
                
                $scope.continue = function() {
                	document.location.href="accueilParticipant.html";
                };
                
            }]);

