
weatherApp.directive('searchResult', function(){
    return {
        restrict: 'E', 
        templateUrl: 'directives/searchResult.html', 
        replace: true, 
        scope: {
            weatherDay: '=', 
            convertToFah: '&', 
            convertDate: '&', 
            day: '@'
        }
    }
})