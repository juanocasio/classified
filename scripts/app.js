angular
.module("ngClassifieds", ["ngMaterial"])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('orange');
})
.directive('helloWorld', function() {
    return {
        template: '<h1>Hello World!</h1>'
    };
});

