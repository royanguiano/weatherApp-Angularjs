weatherApp.controller('homeController', ['$scope', '$log', 'cityService', '$location', function (scope, log, cityService, location) {
    scope.zipcode = cityService.zipcode

    scope.$watch('zipcode', function () {
        cityService.zipcode = scope.zipcode
    })
    scope.submit = function(){
        location.path('/weather')
    }
}])


weatherApp.controller('weatherController', ['$scope', '$log', 'cityService', '$routeParams', 'getWeatherService', function (scope, log, cityService, routeParams, getWeatherService) {
    scope.days = routeParams.days || 2
    scope.data = getWeatherService.getService(scope.days)
                                        
    scope.convertToFah = function(degk){
        return Math.round((1.8 * (degk - 273)) + 32)
    }
    scope.convertDate =  function(date){
        return new Date(date * 1000)
    }

    console.log(scope.data)

}])
