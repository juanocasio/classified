(function () {
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ClassifiedsCtrl", function ($scope, $http) {
            
            $http.get('data/data.json').then(function(classifieds){
                $scope.classifieds = classifieds.data;
            });
             
        });
})();