angular.module('starter.controllers', [])

.controller('bestWesternCtrl', function($scope,ActivityFactory) {
    // recupere toutes les activitées et les set dans scope
    ActivityFactory.getAll($scope);
    $scope.passer = function() {
        // Prendre l'ID suivant (activité)
        $scope.activityIndex = $scope.activityIndex + 1;
        //console.log($scope.activityIndex);
        $scope.activity = $scope.activities[$scope.activityIndex];
        console.log($scope.activity);

    }
})

.controller('favorisCtrl', function($scope, FavorisFactory) {
    FavorisFactory.getAll($scope);
})

.controller('bookingCtrl', function($scope, BookingFactory) {
    BookingFactory.getAll($scope);
})

.controller('btnActionCtrl', function($scope, $http, CONFIG) {
    $scope.passer = function() {
        // Prendre l'ID suivant (activité)
        $scope.activityIndex = $scope.activityIndex + 1;
        $scope.activity = $scope.activities[$scope.activityIndex];
        console.log($scope.activity);

    }

    $scope.favoris = function() {
        $http.post(CONFIG.api_url + '/favorite/add', {id_user: 1, id_activity: $scope.activity.id_activity}).success(function(data, status) {
            console.log('OK SEND');
        })
    }

    $scope.reserver = function() {
        // Afficher un calendrier
    }
})

.controller('historiqueCtrl', function($scope) {})

.controller('profileCtrl', function($scope) {})

// Controler
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {

      //Appel du service LoginService
        LoginService.loginUser($scope.data.username, $scope.data.password).then(function(data) {
            if(data.status != "error") {
                $scope.user = data;
                $state.go('tab.accueil');
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: 'Mauvais identifiant',
                    template: 'Vérifier vos informations'
                });
            }
        })
    }
})

.controller('askCtrl', function($scope, $state){
    $scope.search = function(result){
        $state.go('result',{result:result})
    }
})

.controller('resultCtrl', function($scope, $stateParams){
    $scope.result = $stateParams.result
});
